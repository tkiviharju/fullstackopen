import React from 'react';

const Form = ({ handleSubmit, handleChange, newName, newNumber }) => (
	<form onSubmit={handleSubmit}>
	<div>
		  name: <input value={newName} name='name' onChange={handleChange}/>
		  number: <input value={newNumber} name='number' onChange={handleChange}/>
	</div>
	<div>
		<button type="submit">add</button>
	</div>
	</form>

);

export default Form;