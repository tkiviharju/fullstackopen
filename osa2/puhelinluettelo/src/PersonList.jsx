import React from 'react';

const PersonList = ({ persons, filter, handleDelete }) => (
	<>
		{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
					.map(person => <div key={person.name}>{person.name} {person.number} <button name={person.id} onClick={handleDelete}>Delete</button></div>)
			}
	</>
	
);

export default PersonList;