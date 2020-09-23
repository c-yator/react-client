import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const [shouldRedirect, setShouldRedirect] = useState(false);

	const authState = useSelector((state) => state.authState);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShouldRedirect(true);
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Route
			{...rest}
			render={(props) =>
				authState.isAuthenticated ? (
					<Component {...props} />
				) : shouldRedirect ? (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				) : (
					<Spinner className='d-block mx-auto mt-5' />
				)
			}
		/>
	);
};

export default ProtectedRoute;
