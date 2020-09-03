import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';

function NavLinks({ display }) {
	const handleDisplay = (display) => {
		switch (display) {
			case 'sm-only':
				return 'd-md-none';
			case 'md-up':
				return 'd-none d-md-block';
			default:
				break;
		}
	};

	return (
		<>
			<NavItem className={handleDisplay(display)}>
				<NavLink tag={RouterNavLink} to='/shop'>
					Shop
				</NavLink>
			</NavItem>
			<NavItem className={handleDisplay(display)}>
				<NavLink tag={RouterNavLink} to='/cart'>
					Cart
				</NavLink>
			</NavItem>
		</>
	);
}

export default NavLinks;
