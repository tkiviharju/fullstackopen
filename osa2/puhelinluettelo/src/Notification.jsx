import React from 'react';

const Notification = ({notification, error}) => {
	return (<div className={`notification ${error ? 'error' : ''}`}>
		{notification}
	</div>);
}

export default Notification;