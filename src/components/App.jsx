// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
/*eslint-disable */
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
/*eslint-disable */
import { v4 } from 'uuid';



class App extends React.Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }
  // life cycle hook that will update elapsed wait time for ticket
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
  // update ticket's elapsed wait time
  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  // Following event handler naming conventions, we call the method handleChangingSelectedTicket()
  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render(){
    console.log(this.state.masterTicketList);
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route
            path='/newticket'
            render={()=><NewTicketControl />} />
          <Route
            path='/admin'
            render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          <Route
            component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

export default connect(mapStateToProps)(App);
