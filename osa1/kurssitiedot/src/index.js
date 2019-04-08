import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) =>
    <h1>{course}</h1>


const Part = ({ part, exercises}) =>
    <p>
        {part} {exercises}
    </p>

const Content = (props) => 
    <div>
        <Part part={props.part1} exercises={props.ex1}/>
        <Part part={props.part2} exercises={props.ex2}/>
        <Part part={props.part3} exercises={props.ex3}/>
    </div>


const Total = ({ total }) =>
    <p>yhteensä {total} tehtävää</p>


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 11
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} 
            ex1={exercises1} ex2={exercises2} ex3={exercises3}
        />
        <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
