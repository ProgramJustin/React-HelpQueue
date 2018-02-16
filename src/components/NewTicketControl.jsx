import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {
  constructor(props) {
    // super is called to access a parent class's constructor
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleShootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;
