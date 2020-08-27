import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const authState = useSelector((state) => state.authState);
	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to /signin page
		<Route
			{...rest}
			render={(props) =>
				authState.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to='/signin' />
				)
			}
		/>
	);
};

export default ProtectedRoute;
