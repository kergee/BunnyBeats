import '../recovered/preload.js';
import '../recovered/i18n/init.js';
import { ReactDOM, ReactDefault, jsxRuntime } from '../recovered/vendor/react-runtime.js';
import { App } from './App.js';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');
ReactDOM.createRoot(rootElement).render(jsxRuntime.jsx(ReactDefault.StrictMode, {
  children: jsxRuntime.jsx(App, {}),
}));
