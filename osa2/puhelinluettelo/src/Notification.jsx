import React from 'react';

const Notification = ({notification, error}) => {
	return (<div class={`notification ${error ? 'error' : ''}`}>
		{notification}
	</div>);
}

export default Notification;