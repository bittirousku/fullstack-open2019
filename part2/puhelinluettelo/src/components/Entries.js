import React from 'react';

import Entry from "./Entry.js";

// IMPORTANT: don't define components inside App !!

const Entries = ({persons, deleteEntry}) => {
  const rows = () => (
    persons.map(person =>
      <Entry
        key={person.id}
        name={person.name}
        number={person.number}
        deleteEntry={deleteEntry}
        id={person.id}
      />
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
