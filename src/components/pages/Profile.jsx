import React from 'react';
import { Container, Card, CardBody, CardHeader } from 'reactstrap';

function Profile() {
	return (
		<Container className="py-3">
			<h5 className="font-weight-bold">Profile</h5>
			<Card>
				<CardHeader>User information</CardHeader>
				<CardBody>
					<div>Username:</div>
					<div>Email:</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>Delivery information</CardHeader>
				<CardBody>
					<div>First name:</div>
					<div>Last name:</div>
					<div>Phone number:</div>
					<div>Alternate phone number:</div>
					<div>Delivery address:</div>
					<div>County:</div>
					<div>Town:</div>
				</CardBody>
			</Card>
		</Container>
	);
}

export default Profile;
