import React, { useState } from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';

const Display = ({ curTime }) => <p>{curTime.toLocaleString()}</p>
const Button = ({ title, onClick }) => <button onClick={onClick} className="App-link">{title}</button>

const App = () => {
    const [curTime, refreshTime] = useState(new Date())
    const setToDate = (newDate) => () => typeof newDate == 'string' ? refreshTime(new Date(newDate)) : refreshTime(new Date())

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Display curTime={curTime} />
                <Button title="Refresh time" onClick={setToDate()} />
                <br />
                <Button title="Change date" onClick={setToDate('2019-02-18 02:40:37')} />
            </header>
        </div>
    );
}

export default App