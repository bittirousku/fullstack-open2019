import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Countries from "./components/Countries.js";
import Filter from "./components/Filter.js";


const App = () => {
  const [ countries, setCountries] = useState([]);
  const [ filter, setFilter ] = useState('');

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      });
  };
  useEffect(hook, []);



  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value.toLowerCase());
  };

  const buttonHandleFilter = (event) => {
		setFilter(event.target.attributes.country.value.toLowerCase())
}

  const countriesToShow = () => {
    if (!filter) {
      return null
    }
    let chosenCountries = countries.filter(country =>
        country.name.toLowerCase().includes(filter)
      )
    return chosenCountries;
  }

  return (
    <div>
      <h2>Search Country</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <Countries countries={countriesToShow()} buttonHandler={buttonHandleFilter}/>
    </div>
  );

};

export default App;

// https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen
