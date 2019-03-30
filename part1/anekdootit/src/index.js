import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  let setRandomSelected = () => {
    let min = 0;
    let max = anecdotes.length - 1;
    let randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randIndex);
    setSelected(randIndex);
  };

  let vote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote anecdotes={props.anecdotes} selected={selected} votes={votes}/>
      <div>
        <Button handleClick={setRandomSelected} text="next anecdote"/>
        <Button handleClick={vote} text="vote"/>
      </div>
      <MostPopularAnecdote anecdotes={props.anecdotes} selected={selected} votes={votes}/>
    </div>
  );
};

const MostPopularAnecdote = (props) => {
  let mostPopularIndex = props.votes.indexOf(Math.max(...props.votes));
  if (props.votes.every((item) => item === 0)) {
    return (
      <>
      </>
    );
  }
  return (
    <>
    <div>
      <Header text="Anecdote with the most votes"/>
      <Anecdote anecdotes={props.anecdotes} selected={mostPopularIndex} votes={props.votes}/>
    </div>
    </>
  );
};


const Anecdote = (props) => {
  return (
    <>
      <div>
        {props.anecdotes[props.selected]}
      </div>
      <div>
        has {props.votes[props.selected]} votes.
      </div>
    </>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Header = ({text}) => (
  <h1>{text}</h1>
);

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
