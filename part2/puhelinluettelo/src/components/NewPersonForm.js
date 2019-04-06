import React from 'react';

const NewPersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        nimi: <input value={props.newName} onChange={props.handleNewName}/>
      </div>
      <div>
        numero: <input value={props.newNumber} onChange={props.handleNewNumber}/>
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  );
};

export default NewPersonForm
