import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App.js";

const courses = [
  {
    name: 'Half Stack -sovelluskehitys',
    id: 1,
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      },
      {
        name: 'Viimeinen osio',
        exercises: 1,
        id: 4
      }
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewaret',
        exercises: 7,
        id: 2
      }
    ],
  }
];


ReactDOM.render(
  <App courses={courses}/>,
  document.getElementById('root')
);



// https://fullstackopen-2019.github.io/osa2/kokoelmien_renderointi_ja_moduulit
