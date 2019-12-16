import React from 'react';

const PersonList = ({ persons, filter }) => (
	<>
		{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
					.map(person => <div key={person.name}>{person.name} {person.number}</div>)
			}
	</>
	
);

export default PersonList;