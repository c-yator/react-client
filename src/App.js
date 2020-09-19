import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css';

//partials
import InfoBar from './components/partials/InfoBar';
import Navbar from './components/partials/NavBar';
import Footer from './components/partials/Footer';

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
import Toast from './components/partials/Toast';

function App() {
	return (
		<div>
			<InfoBar />
			<Navbar />
			<Toast icon='warning' />
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
