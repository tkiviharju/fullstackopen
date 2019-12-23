import React from 'react';

const Filter = ({ filter, handleFilterChange}) => (
	<p>
		filter shown with
		<input className='input filter' value={filter} onChange={handleFilterChange}/>
	</p>
);

export default Filter;