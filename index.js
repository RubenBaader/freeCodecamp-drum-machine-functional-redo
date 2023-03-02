import React from "react";
// import reactDom from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./src/App";
// import css from "./src/stylesheet.css";
// import css from "/public/stylesheet.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)