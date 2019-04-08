import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) =>
    <h1>{course}</h1>

const Content = (props) => {
    return <>
        <p>
        {props.part1} {props.ex1}
      </p>
      <p>
        {props.part2} {props.ex2}
      </p>
      <p>
        {props.part3} {props.ex3}
      </p>
    </>

}

const Total = ({ total }) =>
    <p>yhteensä {total} tehtävää</p>


const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 14
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
