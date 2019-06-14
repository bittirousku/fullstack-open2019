import React from 'react';

const Country = ({country}) => {
  const languages = () => (
    country.languages.map(language =>
      <li key={language.name}> {language.name}</li>
    )
  );

  // debugger;
  return (
    <>
      <h2>{country.name}</h2>
      <p>
        Capital: {country.capital}<br/>
        Population: {country.population}
      </p>

      <h3>Languages</h3>
      <ul>
        {languages()}
      </ul>
      <img alt="flag" src={country.flag} width="200"/>
    </>
  )
}

export default Country;
