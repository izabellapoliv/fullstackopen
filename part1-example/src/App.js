import React from 'react';
import logo from './logo.svg';
import './App.css';

const Footer = () => {
  const now = new Date()
  return (
    <footer>
      <div>
        <small>copy @ {now.getFullYear()}</small>
      </div>
    </footer>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>
        Hellooooo {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}

function App() {
  const now = new Date()
  const num1 = 10
  const num2 = 20
  const person = { name: 'Nayara', age: 8 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It is now {now.toDateString()}
        </p>
        <Hello name="Julia" age={num1} />
        <Hello name={person.name} age={person.age} />
        <p>{num1} + {num2} = {num1 + num2}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
