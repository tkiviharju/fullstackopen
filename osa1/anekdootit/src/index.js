import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
	const initialAnecdotes = props.anecdotes.map(anecdote => { return { points: 0, anecdote } });

	const [ anecdotes, setAnecdotes ] = useState(initialAnecdotes);
	const [ selected, setSelected ] = useState(0);

	const handleNextClick = () => {
		const getRandom = () => Math.floor(Math.random() * Math.floor(anecdotes.length));
		let randomAnecdote = getRandom();
		while (randomAnecdote === selected){
			randomAnecdote = getRandom();
		}
		setSelected(randomAnecdote);
	}

	const handleVoteClick = () => {
		const deepCopy = JSON.parse(JSON.stringify(anecdotes));
		deepCopy[selected].points += 1;
		setAnecdotes(deepCopy);
	}

	const findMostVoted = () => {
		let mostVoted = { anecdote: false, points: 0}
		anecdotes.forEach(anecdote => {
			if (anecdote.points > mostVoted.points) {
				mostVoted = anecdote;
			}
		});
		return mostVoted;
	}
	const { anecdote, points } = findMostVoted();
	return(
		<div>
			<div>
				<h2>Anecdote of the day</h2>
				{anecdotes[selected].anecdote}
				<div>has {anecdotes[selected].points} votes</div>
				<div style={{margin: '10px 0 '}}>
					<div>
						<button onClick={handleVoteClick}>Vote</button>
						<button onClick={handleNextClick}>Next anecdote</button>
					</div>
				</div>
			</div>

			{findMostVoted().anecdote && <div>
				<h2>Anecdote with the most votes</h2>
				<div>
					{anecdote}
				</div>
				<div>
					has {points} votes
				</div>
			</div>
			}
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