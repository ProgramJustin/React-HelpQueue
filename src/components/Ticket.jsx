import React from "react";

// Notice we've also added props as an argument to the Ticket component function's method signature (function Ticket(props)) to indicate it should now accept props. Again, React is functional programming. So the props we pass down are technically just an argument to the component's function!
function Ticket(props){
// Also, don't forget JSX JavaScript expressions must be wrapped in curly braces. This indicates content should be evaluated instead of literally rendered. We call the props object and access its location, name and issue values, which requires evaluation. (Without curly braces, our DOM would literally read "props.location" instead of "3A").
  return (
    <div>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
       <hr/>
    </div>
  );
}

export default Ticket;
