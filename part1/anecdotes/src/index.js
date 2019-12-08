import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => <h2>{text}</h2>
const Anecdote = ({ text }) => <p>{text}</p>
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = ({ anecdotes }) => {
    const initialVotes = anecdotes.reduce((acc, value, index) => ({ ...acc, [index]: 0 }), {})
    const [selected, setSelected] = useState(0)
    const [votes, addVote] = useState(initialVotes)
    console.log(votes)

    const getWinningAnecdote = () => {
        const max = Object.entries(votes).reduce((acc, value, index) => {
            console.log(value, acc)
            return value[1] > acc[1] ? value : acc
        }, ['max', -Infinity])
        return anecdotes[max[0]]
    }
    const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber)
    const skipAnecdote = () => setSelected(getRandomNumber(anecdotes.length))
    const addAnecdoteVote = (position) => {
        addVote({ ...votes, [position]: votes[position] + 1 })
        skipAnecdote()
    }

    return (
        <div>
            <Title text="Anecdote of the day" />
            <Anecdote text={anecdotes[selected]} />
            <hr />
            <Button text="+ Vote" onClick={() => addAnecdoteVote(selected)} />
            <Button text="> Next anecdote" onClick={() => skipAnecdote()} />

            <Title text="Winning anecdote" />
            <Anecdote text={getWinningAnecdote()} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
