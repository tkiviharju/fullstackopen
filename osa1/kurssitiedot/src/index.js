import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) =>
    <h1>{course}</h1>


const Part = ({ part, exercises}) =>
    <p>
        {part} {exercises}
    </p>

const Content = ({ parts }) =>
    <div>
        {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
    </div>

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0);

    return <p>yhteensä {total} tehtävää</p>
    
}


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
            name: 'Reactin perusteet',
            exercises: 10
            },
            {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
            },
            {
            name: 'Komponenttien tila',
            exercises: 14
            }
        ]
    }
    const { name, parts } = course;
    return (
        <div>
            <Header course={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
