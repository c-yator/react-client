import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	const authState = useSelector((state) => state.authState);
	return (
		// restricted = false meaning public route
		// restricted = true meaning restricted route
		<Route
			{...rest}
			render={(props) =>
				authState.isAuthenticated && restricted ? (
					<Redirect to='/dashboard' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PublicRoute;
