// This entry point is a special type of file. It is not a component
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';
// <AppContainer> is a wrapper component from React-Hot-Loader that handles reloading the application and sending errors if anything goes awry.

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
    <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};
render(App);
// The if statement below render() triggers the swapping process. Take a look at the HMR documentation for optional further explanation about how this works behind the scenes.
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}

// We always import React from the "react" npm package at the top of the file.
//
// The component is a function! As discussed earlier, React relies on functional programming; most components are actually functions. (There are also class-based components; but they should be used very sparingly. We'll learn about them next week.)
//
// The component function name always begins with a capital letter and matches the filename.
//
// The function returns the JSX this component will render in the browser.
//
// // Components reside in their own file, and are exported as a module so other areas of the application may import it.
