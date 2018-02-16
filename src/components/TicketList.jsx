import React from 'react';
import Ticket from './Ticket';

function TicketList(){
  var ticketList = {
    fontFamily: 'sans-serif',
  };
  return (
    <div style={ticketList}>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}
        />
      )}
    </div>

  );
}

export default TicketList;
