import React from 'react';
import Part from './Part.jsx';

const Content = ({parts}) => 
	<>
		{parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)}
	</>

export default Content;