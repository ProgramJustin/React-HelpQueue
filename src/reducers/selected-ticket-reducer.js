import constants from './../constants';
import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECTED_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
