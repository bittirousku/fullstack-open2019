import React from 'react';

import Entry from "./Entry.js";

// IMPORTANT: don't define components inside App !!

const Entries = ({persons}) => {
  const rows = () => (
    persons.map(person =>
      <Entry key={person.name} name={person.name} number={person.number}/>
    )
  );
  return (
    <>
      <ul>
        {rows()}
      </ul>
    </>
  );
};

export default Entries;
