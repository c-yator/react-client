import React from 'react';
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
} from 'reactstrap';
import { logout } from '../../redux/actions/authActions';

function ProtectedAuthLinks() {
	const authState = useSelector((state) => state.authState);

	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<>
			<UncontrolledDropdown nav inNavbar className="d-none d-md-block pb-0">
				<DropdownToggle nav caret>
					{authState.user?.username || 'Account'}
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag={Link} to="/profile">
						Profile
					</DropdownItem>
					<DropdownItem tag={Link} to="/orders">
						Orders
					</DropdownItem>
					<DropdownItem tag={Link} to="/favorites">
						Favorites
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem tag={'div'}>
						<Button className="w-100" onClick={() => dispatch(logout(history))}>
							Log out
						</Button>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>

			<div className="d-md-none">
				<NavItem>
					<NavLink tag={RouterNavLink} to="/profile">
						Profile
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/orders">
						Orders
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={RouterNavLink} to="/favorites">
						Favorites
					</NavLink>
				</NavItem>
				<hr style={{ background: 'white' }} />
				<Button className="w-100" onClick={() => dispatch(logout(history))}>
					Log out
				</Button>
			</div>
		</>
	);
}

export default ProtectedAuthLinks;
