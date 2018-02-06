// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from "react";
import Header from "./Header";

function App(){
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
