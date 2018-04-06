// its common practice to import constants as, or as constants is fine too
import constants from './../constants';
import c from './../constants';
/*eslint-disable */
export default (state = {}, action) => {
  let newState;

  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_TICKET:
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;

    // returned newState will be a list of all tickets that also includes the most recent ticket, saved under its Firebase-assigned ID

  case c.RECEIVE_TICKET:
    newState = Object.assign({}, state);
    newState[action.ticket.id] = action.ticket;
    return newState;

  default:

    return state;
  }
};
