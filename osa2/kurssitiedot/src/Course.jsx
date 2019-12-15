import React from 'react';
import Content from './Content.jsx';
import Header from './Header.jsx';

const Course = ({ course }) => {
	if (!course) return null;

	return <div>
		<Header title={course.name} />
		<div>
			<Content parts={course.parts} />
		</div>
	</div>
}

export default Course;