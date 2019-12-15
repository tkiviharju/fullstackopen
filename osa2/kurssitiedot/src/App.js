import React from 'react';

import Course from './Course.jsx';

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			},
			{
				name: 'Redux',
				exercises: 11,
				id: 4
			}
		]
	};

	const total = course.parts.reduce((prevValue, nextPart) => prevValue + nextPart.exercises, 0);
  
	return (
		<div>
			<Course course={course} />
			<strong>
				total of {total} exercises
			</strong>
	  	</div>
	);
}

export default App;