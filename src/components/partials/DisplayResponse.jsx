import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';

function DisplayResponse() {
	const responseState = useSelector((state) => state.responseState);
	const [show, setShow] = useState(true);
	const onDismiss = () => setShow(false);
	const { message } = responseState;

	return message ? (
		<Alert
			color='danger'
			className='displayResponse'
			isOpen={show}
			toggle={onDismiss}
		>
			{message}
		</Alert>
	) : null;
}

export default DisplayResponse;
