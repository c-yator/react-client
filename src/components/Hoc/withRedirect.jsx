import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withRedirect = (WrappedComponent) => {
	function WithRedirect({ location }) {
		const { from } = location.state || { from: '/profile' };
		const authState = useSelector((state) => state.authState);
		const [shouldRedirect, setshouldRedirect] = useState(false);

		useEffect(() => {
			const { isAuthenticated } = authState;
			isAuthenticated && setshouldRedirect(true);
		}, [authState]);

		return shouldRedirect ? <Redirect to={from} /> : <WrappedComponent />;
	}
	return WithRedirect;
};

export default withRedirect;
