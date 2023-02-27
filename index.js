import React from "react";
import reactDom from "react-dom";
import App from "./src/App"

console.log("I'm alive!", document.getElementById("root"));
reactDom.render(<App />, document.getElementById("root"));