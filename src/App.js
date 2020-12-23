import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

//partials
import InfoBar from './components/partials/InfoBar';
import Navbar from './components/partials/NavBar';
import FooterPortal from './components/partials/FooterPortal';
// import DisplayResponse from "./components/partials/DisplayResponse";

//routes
import ProtectedRoute from './components/auth/ProtectedRoute';
import Error from './components/pages/Error';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Checkout from './components/pages/Checkout';

import { clearResponse } from './redux/actions/responseActions';
import SideNav from './components/partials/SideNav';

// import DisplayResponse from './components/partials/DisplayResponse';

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
			<ToastContainer
				position={'top-center'}
				transition={Slide}
				className="w-50"
			/>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/cart" component={Cart} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<ProtectedRoute path="/orders" component={SideNav} />
				<ProtectedRoute path="/favorites" component={SideNav} />
				<ProtectedRoute path="/profile" component={SideNav} />
				<ProtectedRoute path="/checkout" component={Checkout} />

				<Route component={Error} />
			</Switch>

			<FooterPortal />
		</div>
	);
}

export default App;
