import React from 'react';

class NewTicketControl extends React.Component {
  constructor(props) {
    // super is called to access a parent class's constructor
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return(
      <div>
        <p>This is the NewTicketControl component!</p>
      </div>
    );
  }
}
export default NewTicketControl;
