import { ReactDOM, ReactDefault, jsxRuntime } from "./vendor/react-runtime.js";
import { App } from "./App.js";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Could not find root element to mount to");
const root = ReactDOM.createRoot(rootElement);
root.render(jsxRuntime.jsx(ReactDefault.StrictMode, {
  children: jsxRuntime.jsx(App, {})
}));
//# sourceMappingURL=mount.js.map
