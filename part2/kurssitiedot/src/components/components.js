import React from 'react';


const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  );
};


const Content = ({course}) => {

  const parts = () => (
    course.parts.map(part =>
      <Part key={part.id} part={part} />
    )
  );

  return (
    <>
      {parts()}
    </>
  );
};


const Part = ({part}) => {
  return (
    <p>{part["name"]} {part["exercises"]}</p>
  );
};


const Total = ({course}) => {
  let exercisesCount = course.parts.reduce((acc, course) => {
    return acc + course["exercises"];
  }, 0);
  return (
    <>
      <p>Yhteensä {exercisesCount} tehtävää</p>
    </>
  );
};


export default Course;
