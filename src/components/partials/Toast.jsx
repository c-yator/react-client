import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toast as ToastContainer, ToastBody, ToastHeader } from 'reactstrap';

function Toast({ icon, message }) {
	const [show, setShow] = useState(true);
	const toggle = () => {
		setShow(!show);
	};

	return (
		<ToastContainer isOpen={show}>
			<ToastHeader toggle={toggle} className='text-capitalize' icon={icon}>
				{icon === 'danger' ? 'error' : icon}
			</ToastHeader>
			<ToastBody>{message}</ToastBody>
		</ToastContainer>
	);
}

Toast.propTypes = {
	icon: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default Toast;
