import React from 'react';
import { Switch, Route } from 'react-router-dom';

//partials
import InfoBar from './components/partials/InfoBar';
import Navbar from './components/partials/NavBar';
//routes
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Checkout from './components/pages/Checkout';

function App() {
	return (
		<div>
			<InfoBar />
			<Navbar />

			<div className='container'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
					<Route path='/cart' component={Cart} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/checkout' component={Checkout} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
