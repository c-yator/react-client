import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

//auth links
import ProtectedAuthLinks from '../auth/ProtectedAuthLinks';
import PublicAuthLinks from '../auth/PublicAuthLinks';
import NavLinks from './NavLinks';
// import NavLinks from './NavLinks';

function NavBar() {
	const authState = useSelector((state) => state.authState);

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color='dark' dark expand='md' sticky='top'>
			<NavbarToggler onClick={toggle} />
			<NavbarBrand tag={RouterNavLink} to='/'>
				GroceryShop
			</NavbarBrand>

			<NavLinks className='d-md-none' />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ml-auto' navbar>
					{authState.isAuthenticated ? (
						<ProtectedAuthLinks />
					) : (
						<PublicAuthLinks />
					)}
				</Nav>
			</Collapse>

			<NavLinks className='d-none d-md-flex' />
		</Navbar>
	);
}

export default NavBar;
