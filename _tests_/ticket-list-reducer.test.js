import ticketListReducer from './../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData = {
    names : 'Justin & Nigel',
    location : '4b',
    issue : 'Jest is triflen and will not work with webpack',
    timeOpen: 150000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

});
