import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set default theme
document.documentElement.setAttribute('data-theme', 'default');

createRoot(document.getElementById("root")!).render(<App />);
