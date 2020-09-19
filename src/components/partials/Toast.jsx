import React from 'react';
import { Toast as ToastContainer, ToastBody, ToastHeader } from 'reactstrap';

function Toast({ icon }) {
	return (
		<ToastContainer>
			<ToastHeader className='text-capitalize' icon={icon}>
				{icon === 'danger' ? 'error' : icon}
			</ToastHeader>
			<ToastBody>
				This is a toast on a white background — check it out!
			</ToastBody>
		</ToastContainer>
	);
}

export default Toast;
