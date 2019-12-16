import React, { useState } from 'react';
import './index.css';
import logo from './logo.svg';
import './App.css';

const Display = ({ curTime }) => <p>{curTime.toLocaleString()}</p>
const Button = ({ title, onClick }) => <button onClick={onClick} className="App-link">{title}</button>
const History = ({ clicks }) => {
    const sumClicks = clicks.left + clicks.right;
    if (sumClicks === 0) {
        return (
            <div>
                <p>Press a button to start counting clicks</p>
            </div>
        )
    }

    return (
        <div>
            <p>Left clicks: {clicks.left}</p>
            <p>Right clicks: {clicks.right}</p>
        </div>
    )
}

const App = () => {
    const [value, setValue] = useState(10)
    const [curTime, refreshTime] = useState(new Date())
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const onLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
    const onRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
    const setToDate = (newDate) => () => typeof newDate == 'string' ? refreshTime(new Date(newDate)) : refreshTime(new Date())
    const setToValue = (newValue) => () => setValue(newValue)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Display curTime={curTime} />
                <Button title="Refresh time" onClick={setToDate()} />
                <br />
                <Button title="Change date" onClick={setToDate('2019-02-18 02:40:37')} />
                <br />
                <Button title="Left" onClick={onLeftClick} />
                <Button title="Right" onClick={onRightClick} />
                <History clicks={clicks} />
                <Button title="Thousand" onClick={setToValue(1000)} />
                <Button title="Reset" onClick={setToValue(0)} />
                <Button title="Increment" onClick={setToValue(value + 1)} />
                <p>Value: {value}</p>
            </header>
        </div>
    );
}

export default App