import React from 'react';

const PersonList = ({ persons, filter, handleDelete }) => (
	<>
		{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
				.sort((p1, p2) => p1.name < p2.name ? -1 : 1)
				.map(person => <div key={person.id}>{person.name} {person.number} <button name={person.id} onClick={handleDelete}>Delete</button></div>)
		}
	</>
	
);

export default PersonList;