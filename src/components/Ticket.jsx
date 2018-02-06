import React from "react";
// React also allows us to assign strict data types to props with a special propTypes property.
 // allows us to strictly define what data type props must be.
import PropTypes from "prop-types";

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
Ticket.propTypes = {};

export default Ticket;
