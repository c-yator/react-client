import React from 'react';
import { Card, CardBody, CardFooter, Button } from 'reactstrap';
import PageTitle from '../partials/PageTitle';

function Addresses() {
	return (
		<div>
			<PageTitle name="Addresses" />

			<Card>
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
		</div>
	);
}

export default Addresses;
