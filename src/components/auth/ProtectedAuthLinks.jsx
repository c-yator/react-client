import React, { useEffect } from 'react';
import { NavLink as RouterNavLink, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
	NavItem,
	NavLink,
	Spinner,
} from 'reactstrap';
import { logout, fetchUser } from '../../redux/actions/authActions';

function ProtectedAuthLinks() {
	const authState = useSelector((state) => state.authState);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<>
			<UncontrolledDropdown nav inNavbar className='d-none d-md-block'>
				<DropdownToggle nav caret>
					{authState.userLoading ? (
						<Spinner size='sm' />
					) : (
						authState.user.username
					)}
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag={Link} to='/profile'>
						Profile
					</DropdownItem>
					<DropdownItem tag={Link} to='/orders'>
						Orders
					</DropdownItem>
					<DropdownItem tag={Link} to='/favorites'>
						Favorites
					</DropdownItem>
					<DropdownItem divider />

					<Button className='w-100' onClick={() => dispatch(logout(history))}>
						Log out
					</Button>
				</DropdownMenu>
			</UncontrolledDropdown>

			<div className='d-md-none'>
				<NavItem>
					<NavLink tag={RouterNavLink} to='/profile'>
						Profile
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to='/orders'>
						Orders
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to='/favorites'>
						Favorites
					</NavLink>
				</NavItem>
				<hr style={{ background: 'white' }} />
				<Button className='w-100' onClick={() => dispatch(logout(history))}>
					Log out
				</Button>
			</div>
		</>
	);
}

export default ProtectedAuthLinks;
