import React from 'react';

const Filter = (props) => (
  <div>
    rajaa näytettäviä: <input value={props.filter} onChange={props.handleFilter}/>
  </div>
);


export default Filter;
