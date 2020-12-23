import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

function Addresses() {
	return (
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
							Make default address
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
	);
}

export default Addresses;
