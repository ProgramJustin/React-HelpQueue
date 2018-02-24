import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  var ticketListStyle = {
    fontFamily: 'sans-serif',
  };
  return (
    <div style={ticketListStyle}>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}/>
      )}
    </div>

  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TicketList;
