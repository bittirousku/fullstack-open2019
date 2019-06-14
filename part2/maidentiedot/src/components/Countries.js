import React from 'react';

import Country from "./Country.js";


const Countries = ({countries, buttonHandler}) => {

  const rows = () => (
    countries.map(country =>
      <div key={country.name}>
        {country.name}
        <button onClick={buttonHandler} country={country.name}>show</button>
      </div>
    )
  );

  const whatToShow = () => {
    if (countries == null || countries.length === 0) {
      return "No results"
    }
    else if (countries.length === 1) {
      return (
        <>
          <Country country={countries[0]}/>
        </>
      )
    }
    else if (1 < countries.length < 10) {
      return (
        <>
          <ul>
            {rows()}
          </ul>
        </>
      )
    }
    else if (countries.length > 10) {
      return "Too many results, specify filter"
    }
  }

  return (
    <>
      {whatToShow()}
    </>
  );
};

export default Countries;
