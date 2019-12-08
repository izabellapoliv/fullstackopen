import React, { useState } from 'react';
import './App.css';

const Title = ({ text }) => <h3>{text}</h3>
const Button = ({ title, onClick }) => <button onClick={onClick}>{title}</button>
const Statistics = ({ good, neutral, bad }) => {
  const getCollectedTotal = () => good + neutral + bad
  const getAvg = (totalFeedback) => totalFeedback === 0 ? totalFeedback : ((good * 1) + (bad * -1)) / totalFeedback
  const getGoodPercent = (totalFeedback) => totalFeedback === 0 ? totalFeedback : good * 100 / totalFeedback

  const totalFeedback = getCollectedTotal()
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr />
      <p>Total: {totalFeedback}</p>
      <p>Average: {getAvg(totalFeedback)}</p>
      <p>Positive: {getGoodPercent(totalFeedback)}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback" />
      <Button title="Good" onClick={() => setGood(good + 1)} />
      <Button title="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button title="Bad" onClick={() => setBad(bad + 1)} />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
