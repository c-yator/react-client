import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

//auth links
import ProtectedAuthLinks from '../auth/ProtectedAuthLinks';
import PublicAuthLinks from '../auth/PublicAuthLinks';

function NavBar() {
	const authState = useSelector((state) => state.authState);

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color='dark' dark expand='md' sticky='top'>
			<NavbarBrand tag={RouterNavLink} to='/'>
				GroceryShop
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ml-auto' navbar>
					{authState.isAuthenticated ? (
						<ProtectedAuthLinks />
					) : (
						<PublicAuthLinks />
					)}
					<NavItem>
						<NavLink tag={RouterNavLink} to='/shop'>
							Shop
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={RouterNavLink} to='/cart'>
							Cart
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default NavBar;
