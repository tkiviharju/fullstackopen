import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
	const initialPoints = Array(anecdotes.length).fill(0);
	const [ selected, setSelected ] = useState(0)
	const [ points, setPoints ] = useState(initialPoints)

	const handleNextClick = () => {
		const getRandom = () => Math.floor(Math.random() * Math.floor(anecdotes.length));
		let randomAnecdote = getRandom();
		while (randomAnecdote === selected){
			randomAnecdote = getRandom();
		}
		setSelected(randomAnecdote);
	}

	const handleVoteClick = () => {
		const copy = [ ...points ];
		copy[selected] += 1;
		setPoints(copy);
	}
	return(
		<div>
			{anecdotes[selected]}
			<div>has {points[selected]} votes</div>
			<div style={{margin: '10px 0 '}}>
				<div>
					<button onClick={handleVoteClick}>Vote</button>
					<button onClick={handleNextClick}>Next anecdote</button>
				</div>
			</div>
		</div>
	);
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