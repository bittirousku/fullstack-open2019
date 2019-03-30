import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Keep track of all clicks
  const [allClicks, setAll] = useState([]);

  // Use a state object:
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // });
  //
  // const handleLeftClick = () => {
  //   setClicks({
  //     ...clicks,
  //     left: clicks.left + 1,
  //   });
  // };
  //
  // const handleRightClick = () => {
  //   setClicks({
  //     ...clicks,
  //     right: clicks.right + 1
  //   });
  // };

  // another (better?) way, use distinct state variables
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };
  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="vasen"/>
        <Button handleClick={handleRightClick} text="oikea"/>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        sovellusta käytetään nappeja painelemalla
      </div>
    );
  }
  return (
    <div>
      näppäilyhistoria: {props.allClicks.join(' ')}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
