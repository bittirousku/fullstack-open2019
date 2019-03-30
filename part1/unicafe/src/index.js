import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />
      <div>
        <Button handleClick={() => setGood(good + 1)} text="hyvä"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali"/>
        <Button handleClick={() => setBad(bad + 1)} text="huono"/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};


const Header = () => (
  <h1>Anna palautetta</h1>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  function sum(props) {
    return Object.values(props).reduce((acc, item) => acc + item);
  }

  function weightedMean(props) {
    let weightSum = sum(Object.values(props));
    let dataElements = props.good - props.bad;
    return dataElements / weightSum;
  }

  function getPositive(props) {
    return (props.good / sum(props)) * 100;
  }

  if (sum(Object.values(props)) === 0) {
    return (
      <>
        <h2>Statistiikkaa</h2>
        <p>Ei yhtään palautetta annettu</p>
      </>
    );
  }

  return (
    <>
    <h2>Statistiikkaa</h2>
    <table>
      <tbody>
        <Statistic text="Hyvä" value={props.good}/>
        <Statistic text="Neutraali" value={props.neutral}/>
        <Statistic text="Huono" value={props.bad}/>
        <Statistic text="Yhteensä" value={sum(props)}/>
        <Statistic text="Keskiarvo" value={weightedMean(props)}/>
        <Statistic text="Positiivisia" value={getPositive(props)+" %"}/>
      </tbody>
    </table>
    </>
  );
};


const Statistic = ({text, value}) =>  {
  return (
    <tr>
      <td>{text}:</td><td>{value}</td>
    </tr>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));

// https://fullstackopen-2019.github.io/osa1/monimutkaisempi_tila_reactin_debuggaus
