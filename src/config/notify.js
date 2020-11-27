import React from 'react';
import Alert from 'reactstrap/lib/Alert';
const notify = {
	success: (message) => <Alert color="success">{message}</Alert>,
	info: (message) => <Alert color="info">{message}</Alert>,
	warning: (message) => <Alert color="warning">{message}</Alert>,
	error: (message) => <Alert color="danger">{message}</Alert>,
};
export default notify;
