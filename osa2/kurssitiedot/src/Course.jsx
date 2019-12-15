import React from 'react';
import Content from './Content.jsx';
import Header from './Header.jsx';

const Course = ({ course }) => {
	if (!course) return null;
	const total = course.parts.reduce((prevValue, nextPart) => prevValue + nextPart.exercises, 0);

	return <div>
		<Header title={course.name} />
		<div>
			<Content parts={course.parts} />
		</div>
		<strong>
			total of {total} exercises
		</strong>
	</div>
}

export default Course;