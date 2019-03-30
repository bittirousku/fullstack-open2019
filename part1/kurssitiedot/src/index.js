import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course}/>
      <Content data={course} />
      <Total data={course} />
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


const Content = (props) => {
  let courses = props.data.parts.map((course, i) => {
    return <Part course={course} key={i} />;
  });
  return (
    <>
      {courses}
    </>
  );
};


const Part = (props) => {
  return (
    <p>{props.course["name"]} {props.course["exercises"]}</p>
  );
};


const Total = (props) => {
  let exercisesCount = props.data.parts.reduce((acc, course) => {
    return acc + course["exercises"];
  }, 0);
  return (
    <>
      <p>{exercisesCount}</p>
    </>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
