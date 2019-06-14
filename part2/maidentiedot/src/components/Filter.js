import React from 'react';

const Filter = (props) => (
  <div>
    Find countries: <input value={props.filter} onChange={props.handleFilter}/>
  </div>
);


export default Filter;
