import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink, Badge, Nav } from 'reactstrap';
import { IoMdCart } from 'react-icons/io';

function NavLinks({ className }) {
	return (
		<Nav navbar style={{ flexDirection: 'row' }} className={className}>
			<NavItem>
				<NavLink className='p-2' tag={RouterNavLink} to='/shop'>
					Shop
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className='p-2' tag={RouterNavLink} to='/cart'>
					<span>
						<IoMdCart size='24px' />
						<Badge className='px-1'>0</Badge>
					</span>
				</NavLink>
			</NavItem>
		</Nav>
	);
}

export default NavLinks;
