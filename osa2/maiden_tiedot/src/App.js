import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Country from './Country.jsx';

const App = () => {
	const [ countries, setCountries ] = useState([]);
	const [ filter, setFilter ] = useState('');

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')	
			.then(result => setCountries(result.data));
	}, []);

	const handleChange = (event) => setFilter(event.target.value);
	
	const handleClick = (event) => setFilter(event.target.name);
	
	const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
	
	return (
		<div>
			find countries
			<input value={filter} onChange={handleChange}/>
			{countriesToShow.length > 10 ? (
				<div>Too many matches, specify another filter</div>
			) : (
				countriesToShow.length === 1 ? (
					countriesToShow.map(country => <Country country={country}/>)
					) : (
					countriesToShow.map(country => 
						<div key={country.name}>
							{country.name}
							<button name={country.name} onClick={handleClick}>
								show
							</button>
						</div>
					)
				)
			)}
		</div>
	);
}

export default App;
