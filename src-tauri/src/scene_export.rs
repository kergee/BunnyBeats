use std::{io::Write, path::Path};
use tauri_plugin_dialog::DialogExt;

const MAX_PNG_BYTES: usize = 32 * 1024 * 1024;

fn validate_png(bytes: &[u8]) -> Result<(), String> {
    if bytes.len() < 33
        || bytes.len() > MAX_PNG_BYTES
        || &bytes[..8] != b"\x89PNG\r\n\x1a\n"
        || &bytes[12..16] != b"IHDR"
    {
        return Err("Invalid PNG or image exceeds 32 MB".into());
    }
    let width = u32::from_be_bytes(bytes[16..20].try_into().unwrap());
    let height = u32::from_be_bytes(bytes[20..24].try_into().unwrap());
    if width == 0 || height == 0 || width > 16384 || height > 16384 {
        return Err("Invalid PNG dimensions".into());
    }
    Ok(())
}

// Write next to the selected destination and replace only after the write succeeds.
fn write_png(path: &Path, bytes: &[u8]) -> Result<(), String> {
    validate_png(bytes)?;
    let parent = path.parent().ok_or("Invalid destination")?;
    let mut temp = tempfile::NamedTempFile::new_in(parent).map_err(|e| e.to_string())?;
    temp.write_all(bytes).map_err(|e| e.to_string())?;
    temp.as_file().sync_all().map_err(|e| e.to_string())?;
    temp.persist(path).map_err(|e| e.error.to_string())?;
    Ok(())
}

#[tauri::command]
pub async fn save_scene_png(
    window: tauri::WebviewWindow,
    bytes: Vec<u8>,
    scene: String,
) -> Result<String, String> {
    if !matches!(scene.as_str(), "flow" | "flock" | "lyric") {
        return Err("Unknown scene".into());
    }
    validate_png(&bytes)?;
    let stamp = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map_err(|e| e.to_string())?
        .as_secs();
    tauri::async_runtime::spawn_blocking(move || {
        let chosen = window
            .dialog()
            .file()
            .set_parent(&window)
            .add_filter("PNG image", &["png"])
            .set_file_name(format!("BunnyBeats-{scene}-{stamp}.png"))
            .blocking_save_file();
        let Some(file) = chosen else {
            return Ok("cancelled".into());
        };
        let path = file.into_path().map_err(|e| e.to_string())?;
        if path
            .extension()
            .and_then(|s| s.to_str())
            .map(|s| s.eq_ignore_ascii_case("png"))
            != Some(true)
        {
            // Do not silently redirect to a different existing filename after the dialog.
            return Err("Choose a filename ending in .png".into());
        }
        write_png(&path, &bytes)?;
        Ok("saved".into())
    })
    .await
    .map_err(|e| e.to_string())?
}

#[cfg(test)]
mod tests {
    use super::*;
    fn png() -> Vec<u8> {
        let mut value = vec![0; 33];
        value[..8].copy_from_slice(b"\x89PNG\r\n\x1a\n");
        value[12..16].copy_from_slice(b"IHDR");
        value[19] = 1;
        value[23] = 1;
        value
    }
    #[test]
    fn validates_size_and_dimensions() {
        assert!(validate_png(b"bad").is_err());
        let mut value = png();
        assert!(validate_png(&value).is_ok());
        value[19] = 0;
        assert!(validate_png(&value).is_err());
        assert!(validate_png(&vec![0; MAX_PNG_BYTES + 1]).is_err());
    }
    #[test]
    fn commits_and_overwrites_only_after_success() {
        let dir = tempfile::tempdir().unwrap();
        let path = dir.path().join("scene.png");
        std::fs::write(&path, b"old").unwrap();
        assert!(write_png(&path, b"bad").is_err());
        assert_eq!(std::fs::read(&path).unwrap(), b"old");
        write_png(&path, &png()).unwrap();
        assert_eq!(std::fs::read(&path).unwrap(), png());
        assert!(write_png(&dir.path().join("missing/scene.png"), &png()).is_err());
    }
}
