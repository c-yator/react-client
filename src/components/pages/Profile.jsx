import React from 'react';
import { Container, Card, CardBody, CardHeader, Button } from 'reactstrap';
import CardFooter from 'reactstrap/lib/CardFooter';

function Profile() {
	return (
		<Container className="py-3">
			<h5 className="font-weight-bold">Profile</h5>
			<Card>
				<CardHeader className="font-weight-bold">
					Account information
				</CardHeader>
				<CardBody>
					<div>Email:</div>
					<div>
						<Button className="px-0" color="link">
							Change
						</Button>
					</div>
					<div>Password:</div>
					<div>
						<Button className="px-0" color="link">
							Change
						</Button>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader className="font-weight-bold">
					Personal information
				</CardHeader>
				<CardBody>
					<div>User name:</div>
					<div>First name</div>
					<div>Last name</div>
					<div>Phone number:</div>

					<Button className="px-0" color="link">
						Change
					</Button>
				</CardBody>
			</Card>
			<Card>
				<CardHeader className="font-weight-bold">
					Delivery address information
				</CardHeader>
				<CardBody>
					<Card>
						<CardBody>
							<div>First name:</div>
							<div>Last name:</div>
							<div>Phone number:</div>
							<div>Alternate phone number:</div>
							<div>Delivery address:</div>
							<div>County:</div>
							<div>Town:</div>
						</CardBody>

						<CardFooter className="d-flex justify-content-between">
							<Button className="px-0" color="link">
								Change
							</Button>
							<Button className="px-0" color="link">
								Make default
							</Button>
						</CardFooter>
					</Card>
					<div className="py-3">
						<Button className="w-100" color="primary" outline>
							Add delivery address
						</Button>
					</div>
				</CardBody>
			</Card>
		</Container>
	);
}

export default Profile;
