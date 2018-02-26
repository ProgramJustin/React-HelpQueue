// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
// import NewTicketForm from './NewTicketForm';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
/*eslint-disable */
import Moment from 'moment';
/*eslint-disable */


class App extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }
  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticket});
    alert('The selected ticket is now' + this.state.selectedTicket.names);
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route
            path='/newticket'
            render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route
            path='/admin'
            render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} />} />
          <Route
            component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
