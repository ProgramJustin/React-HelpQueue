import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div className="color-toggle">
      <style jsx global>{`
        .color-toggle {
          background-color: white;
        }
        .color-toggle:hover {
          background-color: lightGray;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/Admin'){
    return (
      <div
        onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  // Notice the first letter in the propTypes following Ticket is lowercase (Ticket.propTypes), whereas the PropTypes in the lines defining each component property is uppercase (PropTypes.string).
  // We fill this object literal with a list of props the component accepts, and the data type each should be:
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
