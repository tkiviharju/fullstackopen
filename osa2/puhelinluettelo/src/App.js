import React, { useState, useEffect } from 'react';

import personService from './services/persons';
import Filter from './Filter.jsx';
import PersonList from './PersonList.jsx';
import Form from './Form';


const App = () => {
	const [ persons, setPersons] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filter, setFilter ] = useState('');

	useEffect(() => {
		personService
			.getAll()
			.then(result => setPersons(result.data));
	}, []);


	const handleChange = (event) => event.target.name === 'name' ? setNewName(event.target.value) : setNewNumber(event.target.value);

	const handleFilterChange = (event) => setFilter(event.target.value); 

	const handleSubmit = (event) => {
		event.preventDefault();
		const personsContainName = persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase());
		if (personsContainName){
			return alert(`${newName} is already added to phonebook`);
		}
		if (newName && newNumber){
			const newPerson = {name: newName, number: newNumber}
			personService
				.create(newPerson)
				.then(response => {
					setPersons(persons.concat(response.data));
					setNewName('');
					setNewNumber('');
				})
				.catch(err => console.log(err));
		}

	}

	return (
		<div>
			<h1>Phonebook</h1>

			<Filter filter={filter} handleFilterChange={handleFilterChange} />

			<h2>Add a new</h2>
			<Form handleSubmit={handleSubmit} handleChange={handleChange} newNumber={newNumber} newName={newName} />
		
			<h2>Numbers</h2>
			{persons.length > 0 && <PersonList persons={persons} filter={filter} />}
		</div>
	);

}
export default App
