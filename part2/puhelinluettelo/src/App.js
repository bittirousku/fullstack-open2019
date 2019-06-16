import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Entries from "./components/Entries.js";
import NewPersonForm from "./components/NewPersonForm.js";
import Notification from "./components/Notification.js";
import Filter from "./components/Filter.js";
import personService from './services/persons.js';


const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ message, setMessage ] = useState(null);

  const hook = () => {
    personService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople);
      });
  };
  useEffect(hook, []);


  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} already has entry, update number?`)) {
        let person = persons.find((person) => person.name === newName);
        let newPerson = {...person, number: newNumber};
        setNewName('');
        setNewNumber('');
        return updateNumber(person.id, newPerson);
      } else {
        setNewName('');
        setNewNumber('');
        return;
      }
    }

    const personObject = {
      "name": newName,
      "number": newNumber
    };
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    setMessage(`Successfully added ${newName}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);

  };

  const removePerson = (personId) => {
    let person = persons.find(person => person.id === personId);
    if (!window.confirm(`Really delete entry ${person.name}?`)) {
      return;
    }

    personService
      .deleteEntry(personId)
      .then(() => {
        setPersons(persons.filter(person => person.id !== personId));
      });
    setMessage(`Successfully removed ${person.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const updateNumber = (personId, newPerson) => {
    personService
      .update(personId, newPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personId ? person : returnedPerson));
      });
    setMessage(`Successfully updated ${newPerson.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
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
      <Notification message={message} />
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
      <Entries persons={personsToShow} deleteEntry={removePerson}/>
    </div>
  );

};

export default App;


// https://fullstackopen-2019.github.io/osa2/lomakkeiden_kasittely
