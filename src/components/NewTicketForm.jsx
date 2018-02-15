import React from 'react';

function NewTicketForm(){
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
