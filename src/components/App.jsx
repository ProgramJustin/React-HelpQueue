// Components are also modular. They aren't aware of their dependency to parent components. They only "know" about themselves, any data (props) passed to them, and child components they're responsible for rendering.
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
/*eslint-disable */
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
/*eslint-disable */
import PropTypes from 'prop-types';
import c from './../constants';


class App extends React.Component {

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
    const { dispatch } = this.props;
    // map through the masterTicketList prop App receives from the Redux store
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: formattedWaitTime
      };
      dispatch(action);
    });
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route
            path='/newticket'
            render={()=><NewTicketControl />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  }
}

export default withRouter(connect(mapStateToProps)(App));
