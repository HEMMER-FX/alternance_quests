import React from 'react';
import { useState } from 'react';

import axios from 'axios';

import './style/App.css';
import DisplayEmployee from './components/DisplayEmployee';
import DisplayQuote from './components/DisplayQuote';

function App() {
  
  const sampleEmployee = {
    gender: 'male',
    name: {
      first: 'Charlie',
      last: 'Thompson',
    },
    location: {
      street: {
        number: 761,
        name: 'Tay Street',
      },
      city: 'Timaru',
      postcode: 76111,
    },
    email: 'charlie.thompson@example.com',
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
    },
  };
  
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    axios
    .get('https://randomuser.me/api?nat=en')
    .then((response) => response.data)
      .then((data) => {
        setEmployee(data.results[0])
      });
  }

  const sampleQuote = [
    {
      quote: "hi dude",
      character: "Jon snow",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
      characterDirection: "right",
    }
  ]
  
  const [quote, setQuote] = useState(sampleQuote);

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0])
      });
  }

  return (
    <div className="App">
        <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
      <DisplayQuote quote={quote} />
        <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
