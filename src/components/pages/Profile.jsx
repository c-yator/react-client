import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

import PageTitle from '../partials/PageTitle';

function Profile() {
	const [isSubscribed] = useState(false);

	return (
		<>
			<PageTitle name="Profile" />

			<Card>
				<CardHeader className="font-weight-bold">
					Account information
				</CardHeader>
				<CardBody>
					<div className="d-flex justify-content-between align-items-center">
						<div>Email:</div>

						<Button className="px-0" color="link">
							Change
						</Button>
					</div>

					<div className="d-flex justify-content-between align-items-center">
						<div>Password:</div>

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
				<CardHeader className="font-weight-bold">Newsletter</CardHeader>
				<CardBody>
					{
						<div className="d-flex justify-content-between align-items-center">
							<span>
								{isSubscribed === true
									? 'You are subscribed to our newsletter'
									: 'You are not subscribed to our newsletter'}
							</span>
							<Button color="primary">
								{isSubscribed === true ? 'Unsubscribe' : 'Subscribe'}
							</Button>
						</div>
					}
				</CardBody>
			</Card>
		</>
	);
}

export default Profile;
