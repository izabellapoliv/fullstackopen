import React from 'react';

const Header = ({ title }) => {
    return (
        <h1>{title}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = ({ parts }) => {
    const courseParts = () => parts.map(part =>
        <Part key={part.id} part={part.name} exercise={part.exercises} />
    )
    return (
        <>{courseParts()}</>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <hr />
            <Total parts={course.parts} />
        </>
    )
}

export default Course