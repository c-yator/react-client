import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
	Spinner,
} from 'reactstrap';
import { logout, fetchUser } from '../../redux/actions/authActions';

function ProtectedAuthLinks() {
	const authState = useSelector((state) => state.authState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<UncontrolledDropdown nav inNavbar>
			<DropdownToggle nav caret>
				{authState.userLoading ? (
					<Spinner size='sm' />
				) : authState.user.username ? (
					authState.user.username
				) : (
					'Account'
				)}
			</DropdownToggle>
			<DropdownMenu right>
				<DropdownItem tag={Link} to='/profile'>
					Profile
				</DropdownItem>
				<DropdownItem tag={Link} to='/orders'>
					Orders
				</DropdownItem>
				<DropdownItem tag={Link} to='favorites'>
					Favorites
				</DropdownItem>
				<DropdownItem divider />

				<Button className='w-100' onClick={() => dispatch(logout())}>
					Log out
				</Button>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
}

export default ProtectedAuthLinks;
