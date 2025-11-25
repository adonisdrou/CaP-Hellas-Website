import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./index-themes.css";

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'default';
document.documentElement.setAttribute('data-theme', savedTheme);

createRoot(document.getElementById("root")!).render(<App />);
