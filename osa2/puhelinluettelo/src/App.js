import React, { useState } from 'react'

const App = () => {
	const [ persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456' },
		{ name: 'Ada Lovelace', number: '39-44-5323523' },
		{ name: 'Dan Abramov', number: '12-43-234345' },
		{ name: 'Mary Poppendieck', number: '39-23-6423122' }
	]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filter, setFilter ] = useState('');

	const handleChange = (event) => event.target.name === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value);

	const handleFilterChange = (event) => setFilter(event.target.value); 

	const handleSubmit = (event) => {
		event.preventDefault();
		const personsContainName = persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase());
		if (personsContainName){
			return alert(`${newName} is already added to phonebook`);
		}
		if (newName && newNumber){
			setPersons(persons.concat({name: newName, number: newNumber}));
			setNewName('');
			setNewNumber('');
		}

	}

	return (
		<div>
		<h2>Phonebook</h2>

		<p>
			filter shown with
			<input value={filter} onChange={handleFilterChange}/>
		</p>

		<form onSubmit={handleSubmit}>
		<div>
		  	name: <input value={newName} name='name' onChange={handleChange}/>
		  	number: <input value={newNumber} name='number' onChange={handleChange}/>
		</div>
		<div>
			<button type="submit">add</button>
		</div>
		</form>
		<h2>Numbers</h2>
			{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
					.map(person => <div key={person.name}>{person.name} {person.number}</div>)
			}
		</div>
	);

}
export default App
