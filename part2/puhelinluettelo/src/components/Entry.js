import React from 'react';

const Entry = ({name, number, deleteEntry, id}) => {
  return (
    <>
      <li>
        {name}: {number}
        <button onClick={() => deleteEntry(id)}>Delete</button>
      </li>
    </>
  );
};

export default Entry;
