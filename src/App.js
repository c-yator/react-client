import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';

//partials
import InfoBar from './components/partials/InfoBar';
import Navbar from './components/partials/NavBar';
import Footer from './components/partials/Footer';
import DisplayResponse from './components/partials/DisplayResponse';

//routes
import ProtectedRoute from './components/auth/ProtectedRoute';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Checkout from './components/pages/Checkout';
import Orders from './components/pages/Orders';
import Favorites from './components/pages/Favorites';
import Profile from './components/pages/Profile';

import { clearResponse } from './redux/actions/responseActions';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearResponse());
		});
	}, [history, dispatch]);

	return (
		<div>
			<InfoBar />
			<Navbar />
			<DisplayResponse />

			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
				<Route path='/cart' component={Cart} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<ProtectedRoute path='/orders' component={Orders} />
				<ProtectedRoute path='/favorites' component={Favorites} />
				<ProtectedRoute path='/profile' component={Profile} />
				<ProtectedRoute path='/checkout' component={Checkout} />

				<Route component={Error} />
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
