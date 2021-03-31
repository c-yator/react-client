import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import classnames from 'classnames';
import {
	Col,
	Container,
	Row,
	TabContent,
	TabPane,
	ListGroup,
	ListGroupItem,
} from 'reactstrap';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';
import Addresses from '../pages/Addresses';

//actions
import { logout } from '../../redux/actions/authActions';

function SideNav({ history, location: { pathname } }) {
	const [activeTab, setActiveTab] = useState('/profile');

	const dispatch = useDispatch();

	useEffect(() => {
		setActiveTab(pathname);
	}, [pathname]);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="py-3">
			<Row>
				<Col className="py-5 d-none d-md-block" md="4">
					<ListGroup flush>
						<ListGroupItem
							action
							className={classnames({ active: activeTab === '/profile' })}
							tag="button"
							onClick={() => {
								toggle('/profile');
							}}
						>
							Profile
						</ListGroupItem>

						<ListGroupItem
							action
							tag="button"
							className={classnames({ active: activeTab === '/orders' })}
							onClick={() => {
								toggle('/orders');
							}}
						>
							Orders
						</ListGroupItem>

						<ListGroupItem
							action
							tag="button"
							className={classnames({ active: activeTab === '/favorites' })}
							onClick={() => {
								toggle('/favorites');
							}}
						>
							Favorites
						</ListGroupItem>

						<ListGroupItem
							action
							tag="button"
							className={classnames({ active: activeTab === '/addresses' })}
							onClick={() => {
								toggle('/addresses');
							}}
						>
							Addresses
						</ListGroupItem>
						<ListGroupItem
							tag="button"
							color="dark"
							className="text-capitalize font-weight-bold"
							onClick={() => {
								dispatch(logout(history));
							}}
						>
							Logout
						</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md="8">
					<TabContent activeTab={activeTab}>
						<TabPane tabId={'/profile'}>
							<Profile />
						</TabPane>
						<TabPane tabId={'/orders'}>
							<Orders />
						</TabPane>
						<TabPane tabId={'/favorites'}>
							<Favorites />
						</TabPane>
						<TabPane tabId={'/addresses'}>
							<Addresses />
						</TabPane>
					</TabContent>
				</Col>
			</Row>
		</Container>
	);
}

export default SideNav;
