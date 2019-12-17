import React from 'react';

const Country = ({ country }) => {
	const { name, capital, population, languages, flag } = country;
	return (
		<div>
			<h2>{name}</h2>
			<div>capital {capital}</div>
			<div>population {population}</div>
			<h3>languages</h3>
			<ul>{languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
			<img style={{height: 150}}src={flag}></img>
		</div>
	);
}

export default Country;