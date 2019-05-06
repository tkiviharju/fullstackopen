import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ clickHandler, text }) =>
	<button name={text} onClick={clickHandler}>{text}</button>;


const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;
	const mean = (good * 1 + bad * -1) / total;
	const positiveNumbers = parseFloat(good * 100 / total).toFixed(0);
	return total ? (
			<div>
				<div>hyvä: {good}</div>
				<div>neutraali: {neutral}</div>
				<div>huono: {bad}</div>
				<div>yhteensä: {total}</div>
				<div>keskiarvo: {mean ? mean : 0}</div>
				<div>positiiviset: {isNaN(positiveNumbers) ? '0' :`${positiveNumbers} %`}</div>
			</div>
		) : (
			<div>Ei yhtään palautetta annettu</div>
		);
}

const App = () => {
	const [ good, setGood ] = useState(0);
	const [ neutral, setNeutral ] = useState(0);
	const [ bad, setBad ] = useState(0);


const handleClick = (event) => {
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
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));