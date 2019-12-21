import React, { useState, useEffect } from 'react';

import personService from './services/persons';
import Notification from './Notification.jsx';
import Filter from './Filter.jsx';
import PersonList from './PersonList.jsx';
import Form from './Form';


const App = () => {
	const [ persons, setPersons] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ filter, setFilter ] = useState('');
	const [ notification, setNotification ] = useState('');
	const [ error, setError ] = useState(false);

	useEffect(() => {
		personService
			.getAll()
			.then(result => setPersons(result.data));
	}, []);


	const handleNotification = (text, _error = false) => {
		console.log('errorrrr', text)
		console.log(typeof text)
		setNotification(text);
		_error && setError(true);
		setTimeout(() => {
			setNotification('');
			_error && setError(false);
		}, 5000)
	}

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
					handleNotification(`Updated ${newName}`);
					const newPersons = persons
						.filter(person => person.name.toLowerCase() !== newName.toLowerCase())
						.concat(response.data);
					setPersons(newPersons);
					resetInputs();
				})
				.catch(() => handleNotification(`Failed to update ${newName}'s information to phonebook`, true))
		} else if (newName && newNumber){
			const newPerson = {name: newName, number: newNumber}
			personService
				.create(newPerson)
				.then(response => {
					handleNotification(`Added ${newName}`);
					setPersons(persons.concat(response.data));
					resetInputs();
				})
				.catch(() => handleNotification(`Failed to add ${newName} to phonebook`, true))
		}
	}

	const handleDelete = (event) => {
		const id = parseInt(event.target.name);
		const personToDelete = persons.find(person => person.id === id);
		if (window.confirm(`Delete ${personToDelete.name}?`)){
			personService
				.deletePerson(id)
				.then(() => {
					handleNotification(`Deleted ${personToDelete.name}`);
					const newPersons = persons.filter(person => person.id !== id);
					setPersons(newPersons);
				})
				.catch(() => handleNotification(`Information of ${personToDelete.name} has already been removed from server`, true));
			}
		}

	return (
		<div>
			{notification && <Notification notification={notification} error={error}/>}
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
