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

	const resetInputs = () => {
		setNewNumber('');
		setNewName('');
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const personWithSameName = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
		if (personWithSameName && newNumber && window.confirm(`${newName} is already added to phonebooke, replace the old number with a new one?`)){
			const updatedPerson = {name: newName, number: newNumber}
			const { id } = personWithSameName;
			personService
				.update(updatedPerson, id)
				.then(response => {
					const newPersons = persons
						.filter(person => person.name.toLowerCase() !== newName.toLowerCase())
						.concat(response.data);
					setPersons(newPersons);
					resetInputs();
				});
		} else if (newName && newNumber){
			const newPerson = {name: newName, number: newNumber}
			personService
				.create(newPerson)
				.then(response => {
					setPersons(persons.concat(response.data));
					resetInputs();
				})
				.catch(err => console.log(err));
		}
	}

	const handleDelete = (event) => {
		const id = parseInt(event.target.name);
		const personToDelete = persons.find(person => person.id === id);
		if (window.confirm(`Delete ${personToDelete.name}?`)){
			personService
				.deletePerson(id)
				.then(() => {
					const newPersons = persons.filter(person => person.id !== id);
					setPersons(newPersons);
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
			{persons.length > 0 && <PersonList persons={persons} handleDelete={handleDelete} filter={filter} />}
		</div>
	);

}
export default App
