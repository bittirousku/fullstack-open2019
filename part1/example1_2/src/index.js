import React, { useState } from 'react'
import ReactDOM from 'react-dom';

// Start with creating empty react project with
// npx create-react-app example1

const App = () => {
  // Create a state with an initial value of 0
  const [counter, setCounter] = useState(0);  // <-- this is a react hook
  // Never call useState in a loop or some other block!
  // Only from the root level of the component function

  // increment counter value every 1 seconds
  // and re-render the component
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // );

  // Create helper functions for counter button
  // const increaseByOne = () => {
  //   setCounter(counter + 1);
  // };
  // const reset = () => setCounter(0);

  // another way:
  // With this you can pass arguments from JSX template
  // This is currying, we are returning a function from a function
  // because in JSX event handler must be a function, not a
  // function call.
  // const setToValue = (value) => {
  //   return () => {
  //     setCounter(value);
  //   };
  // };

  // another way to format the curry function:
  const setToValue = (value) => () => setCounter(value);


  console.log('Hello from App component');
  const name = "Pekka";
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Arto" age={26 + 10}/>
      <Hello name={name} age={age}/>

      <Display counter={counter}/>
      <Button handleClick={setToValue(counter + 1)} text="plus"/>
      <Button handleClick={setToValue(0)} text="reset"/>
    </div>
  );
};

const Hello = ({name, age}) => {
  // Component names must begin with a Capital letter,
  // otherwise react doesn't render the element.

  // You can destructure props object in the callback function

  // React component should also contain one root element, eg <div>.
  // This results in the final DOM being flooded with <div>'s
  // If you want to prevent this, use empty root tag <></>
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}.</p>
    </>
  );
};

const Display = ({counter}) => (
  <div>{counter}</div>
);

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
);


ReactDOM.render(<App />, document.getElementById('root'));
