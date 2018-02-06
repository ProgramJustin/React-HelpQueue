// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from "react";
import Header from "./Header";

function App(){
  return (
    <div>
      <Header/>,
      <h3>3a</h3>
      <h3>Justin, Mew, and Nigel</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </div>
  );
}

export default App;
