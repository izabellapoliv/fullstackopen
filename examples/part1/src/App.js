import React, { useState } from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [curTime, refreshTime] = useState(new Date())

    const setToDate = (newDate) => () => refreshTime(newDate)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{curTime.toLocaleString()}</p>
                <button onClick={setToDate(new Date())}
                    className="App-link">
                    Refresh time
                </button>
                <br />
                <button onClick={setToDate(new Date('2019-02-18 02:40:37'))}
                    className="App-link">
                    Change date
                </button>
            </header>
        </div>
    );
}

export default App