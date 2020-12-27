import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classnames from 'classnames';
import {
	Col,
	Container,
	Row,
	TabContent,
	TabPane,
	Card,
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
	const [activeTab, setActiveTab] = useState(pathname);

	const dispatch = useDispatch();

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="py-3">
			<Row>
				<Col xs="4" className="py-5">
					<Card>
						<ListGroup>
							<ListGroupItem
								className={classnames({ active: activeTab === '/profile' })}
								tag="a"
								onClick={() => {
									toggle('/profile');
								}}
							>
								Profile
							</ListGroupItem>

							<ListGroupItem
								tag="a"
								className={classnames({ active: activeTab === '/orders' })}
								onClick={() => {
									toggle('/orders');
								}}
							>
								Orders
							</ListGroupItem>

							<ListGroupItem
								tag="a"
								className={classnames({ active: activeTab === '/favorites' })}
								onClick={() => {
									toggle('/favorites');
								}}
							>
								Favorites
							</ListGroupItem>

							<ListGroupItem
								tag="a"
								className={classnames({ active: activeTab === '/addresses' })}
								onClick={() => {
									toggle('/addresses');
								}}
							>
								Addresses
							</ListGroupItem>
							<ListGroupItem
								tag="a"
								onClick={() => {
									dispatch(logout(history));
								}}
							>
								Logout
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
				<Col xs="8">
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
