import React, { useState } from 'react';
import {
	Col,
	Container,
	Row,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane,
} from 'reactstrap';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Favorites from '../pages/Favorites';
import Addresses from '../pages/Addresses';

function SideNav() {
	const [activeTab, setActiveTab] = useState('profile');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="py-3">
			<Row>
				<Col xs="4">
					<Nav vertical fill tabs>
						<NavItem>
							<NavLink
								onClick={() => {
									toggle('profile');
								}}
							>
								Profile
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								onClick={() => {
									toggle('orders');
								}}
							>
								Orders
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								onClick={() => {
									toggle('favorites');
								}}
							>
								Favorites
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								onClick={() => {
									toggle('addresses');
								}}
							>
								Addresses
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Logout</NavLink>
						</NavItem>
					</Nav>
				</Col>
				<Col xs="8">
					<TabContent activeTab={activeTab}>
						<TabPane tabId={'profile'}>
							<Profile />
						</TabPane>
						<TabPane tabId={'orders'}>
							<Orders />
						</TabPane>
						<TabPane tabId={'favorites'}>
							<Favorites />
						</TabPane>
						<TabPane tabId={'addresses'}>
							<Addresses />
						</TabPane>
					</TabContent>
				</Col>
			</Row>
		</Container>
	);
}

export default SideNav;
