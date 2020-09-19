import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink, Badge } from 'reactstrap';
import { IoMdCart } from 'react-icons/io';

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
					<span>
						<IoMdCart size='1.5rem' />
						<Badge className='px-1'>0</Badge>
					</span>
				</NavLink>
			</NavItem>
		</>
	);
}

export default NavLinks;
