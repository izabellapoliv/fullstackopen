import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0]} exercise={props.exercises[0]} />
            <Part part={props.parts[1]} exercise={props.exercises[1]} />
            <Part part={props.parts[2]} exercise={props.exercises[2]} />
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.number}</p>
    )
}

const App = () => {
    const course = 'Half Stack application developments'
    const part1 = 'Fundamentals of ReactJS'
    const exercises1 = 100
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
            <Total number={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
