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
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId} />;
      })}
    </div>
  );
}
// Notice we don't declare onTicketSelection as isRequired, because instances of TicketList rendered in the index route will not be be passed this prop. Only those rendered in the admin route will have this prop.
TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
};

export default TicketList;
