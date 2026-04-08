# Add Songs

## Fastest Way (UI Manager)

1. Start local server and open `http://localhost:8080/song-manager.html`.
2. Click **Choose Project Folder** and pick your `njzneverdie` folder.
3. Fill song info, select files, click **Save Song**.
4. Refresh `http://localhost:8080/`.

The manager writes files to `assets/` and updates `songs.json` automatically.

## Manual Way

1. Put your music files in `assets/` (for example: `assets/My Song 1.mp3`).
2. Put matching cover image and lyrics files in `assets/` (optional but recommended).
3. Edit `songs.json` and add one object per song.
4. Refresh the page.

If `songs.json` is empty (`[]`), the player falls back to the built-in playlist.

## Song Object Fields

- `id`: unique id string
- `title`: song title
- `artist`: artist name
- `album`: album name
- `audioSrc`: audio path, usually `/assets/<file>.mp3`
- `lrcSrc`: lyrics path, usually `/assets/<file>.lrc`
- `coverUrl`: cover path, usually `/assets/<file>.webp`
- `themeColor`: hex color like `#F05A66`
- `cubesTheme`: one of `pink`, `purple`, `green`

You can copy from `songs.example.json` as a starting template.
