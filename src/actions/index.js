import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import Moment from 'Moment';

firebase.initializeApp(firebaseConfig);
// specify a tickets location (also known as a node) in our database
// You can reference the root or child location in your Database by calling firebase.database().ref() or firebase.database().ref("child/path").
const tickets = firebase.database().ref('tickets');

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: new Date().getTime()
  });
}

// a listener that automatically runs when Firebase saves new data.
export function watchFireBaseTicketsRef() {
  return function(dispatch) {
    tickets.on('child_added', data => {
      console.log(data.val());
      const newTicket = Object.assign({}, data.val(), {
        id: data.getKey(),
        formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
      });
      console.log(newTicket);
    });
  };
}

function receiveTicket(ticketFromFirebase) {
  return {
    type: c.RECEIVE_TICKET,
    ticket: ticketFromFirebase
  };
}
