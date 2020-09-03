import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//partials
import InfoBar from './components/partials/InfoBar';
import Navbar from './components/partials/NavBar';

//routes
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
import ProtectedRoute from './components/auth/ProtectedRoute';

//actions
import { refresh } from './redux/actions/authActions';
import Footer from './components/partials/Footer';

function App() {
	const authState = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	useEffect(() => {
		const { token } = authState;
		if (!token) {
			dispatch(refresh());
		}
	}, [dispatch, authState]);

	return (
		<div>
			<InfoBar />
			<Navbar />
			<div style={{ paddingBottom: '300px' }}>
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
			</div>

			<Footer />
		</div>
	);
}

export default App;
