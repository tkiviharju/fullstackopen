import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ clickHandler, text }) =>
	<button name={text} onClick={clickHandler}>{text}</button>


const App = () => {
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);


const handleClick = (event) => {
	console.log(event.target.name)
	switch (event.target.name){
		case ('hyvä'):
			setGood(good + 1);
			break;
		case ('neutraali'):
			setNeutral(neutral + 1);
			break;
		case ('huono'):
			setBad(bad + 1);
			break;
		default:
			return;
	}
}
	return (
		<div>
			<h2>anna palautetta</h2>
			<div>
				<Button clickHandler={handleClick} text='hyvä'></Button>
				<Button clickHandler={handleClick} text='neutraali'></Button>
				<Button clickHandler={handleClick} text='huono'></Button>
			</div>
			<h2>statistiikka</h2>
			<div>
				<div>hyvä: {good}</div>
				<div>neutraali: {neutral}</div>
				<div>huono: {bad}</div>
			</div>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))