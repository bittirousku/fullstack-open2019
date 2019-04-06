import React from "react";

import Course from "./components/components.js";


const App = ({courses}) => {

  const rows = () => (
    courses.map(course =>
      <Course key={course.id} course={course}/>
    )
  );

  return (
    <div>
      {rows()}
    </div>
  );
};

export default App;
