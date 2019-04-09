import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) =>
    <h1>{course}</h1>


const Part = ({ part, exercises}) =>
    <p>
        {part} {exercises}
    </p>

const Content = ({ courses }) =>
    <div>
        {courses.map(course => <Part key={course.name} part={course.name} exercises={course.exercises} />)}
    </div>

const Total = ({ total }) =>
    <p>yhteensä {total} tehtävää</p>


const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
    }
    const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    }
    const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
    }
    const courses = [part1, part2, part3]
    const total = courses.reduce((sum, course) => sum += course.exercises, 0);
    return (
        <div>
            <Header course={course} />
            <Content courses={courses}
            />
            <Total total={total} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
