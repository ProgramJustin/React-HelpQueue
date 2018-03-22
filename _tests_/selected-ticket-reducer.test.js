import selectedTicketReducer from './../src/reducers/selected-ticket-reducer';

describe('selectedTicketReducer', () => {

  test('should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, {type: null })).toEqual({});
  });

});
