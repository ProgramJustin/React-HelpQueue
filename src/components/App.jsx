// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <div>
      <Header />
      <TicketList />
    </div>
  );
}

export default App;
