// This entry point is a special type of file. It is not a component
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App/>,
  document.getElementById('react-app-root')
);

// We always import React from the "react" npm package at the top of the file.
//
// The component is a function! As discussed earlier, React relies on functional programming; most components are actually functions. (There are also class-based components; but they should be used very sparingly. We'll learn about them next week.)
//
// The component function name always begins with a capital letter and matches the filename.
//
// The function returns the JSX this component will render in the browser.
//
// // Components reside in their own file, and are exported as a module so other areas of the application may import it.
