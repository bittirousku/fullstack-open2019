import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Entries from "./components/Entries.js";
import NewPersonForm from "./components/NewPersonForm.js";
import Filter from "./components/Filter.js";


const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  };
  useEffect(hook, []);


  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      setNewName("");
      window.alert(`${newName} on jo puhelinluettelossa`);
      return;
    }

    const personObject = {
      "name": newName,
      "number": newNumber
    };
    console.log(personObject);
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value.toLowerCase());
  };

  const personsToShow = !filter
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter));


  // IMPORTANT: don't define components inside App !!
  // The state will be messed up
  // The component would be redefined every time App rerenders.
  // one symptom: text field will lose focus after every typed letter

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>Lisää uusi numero</h2>
      <NewPersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numerot</h2>
      <Entries persons={personsToShow}/>
    </div>
  );

};

export default App;


// https://fullstackopen-2019.github.io/osa2/lomakkeiden_kasittely
