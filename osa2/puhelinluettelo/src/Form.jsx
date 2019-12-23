import React from 'react';

const Form = ({ handleSubmit, handleChange, newName, newNumber }) => (
	<form onSubmit={handleSubmit}>
	<div className='input-container'>
		  name: <input className='input' value={newName} name='name' onChange={handleChange}/>
		  number: <input className='input' value={newNumber} name='number' onChange={handleChange}/>
	</div>
	<div>
		<button type="submit">add</button>
	</div>
	</form>

);

export default Form;