import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Collapse,
	Button,
} from 'reactstrap';
// import Accordion from '../partials/Accordion';
import OrderSummary from '../partials/OrderSummary';
import AddressForm from '../partials/AddressForm';
import PaymentForm from '../partials/PaymentForm';

import { IoMdCheckmarkCircleOutline, IoMdCreate } from 'react-icons/io';

function Checkout() {
	const { address } = useSelector((state) => state.userState);

	const [addressIsOpen, setAddressIsOpen] = useState(true);
	const [paymentIsOpen, setPaymentIsOpen] = useState(
		Object.keys(address).length > 0 ? true : false
	);

	const toggleAddress = () => setAddressIsOpen(!addressIsOpen);
	const togglePayment = () => setPaymentIsOpen(!paymentIsOpen);

	const {
		firstName,
		lastName,
		mobilePhoneNumber,
		alternatePhoneNumber,
		deliveryAddress,
		county,
		town,
	} = address;
	return (
		<div className="container py-3">
			<h5>Checkout</h5>

			<Row>
				<Col xs={{ size: 12, order: 2 }} md={{ size: 7, order: 1 }}>
					<Card>
						<CardHeader className="d-flex justify-content-between align-items-center">
							<Button color="link" onClick={toggleAddress}>
								1. DELIVERY ADDRESS
							</Button>
							{Object.keys(address).length > 0 && (
								<span>
									<IoMdCheckmarkCircleOutline />
									completed
								</span>
							)}
						</CardHeader>
						<Collapse isOpen={addressIsOpen}>
							<CardBody>
								{Object.keys(address).length > 0 ? (
									<div>
										<div>First Name: {firstName}</div>
										<div>Last Name: {lastName}</div>
										<div>Mobile phone number: {mobilePhoneNumber}</div>
										{alternatePhoneNumber && (
											<div>Alternate phone number: {alternatePhoneNumber}</div>
										)}
										<div>Delivery address: {deliveryAddress}</div>
										<div>County: {county}</div>
										<div>Town: {town}</div>
										<div>
											<Button className="px-0" color="link">
												<span>
													<IoMdCreate />
													Edit
												</span>
											</Button>
										</div>
									</div>
								) : (
									<AddressForm />
								)}
							</CardBody>
						</Collapse>
					</Card>

					<Card>
						<CardHeader>
							<Button color="link" onClick={togglePayment}>
								2. PAYMENT METHOD
							</Button>
						</CardHeader>
						<Collapse isOpen={paymentIsOpen}>
							<CardBody>
								<h6>Choose payment method</h6>
								<PaymentForm />
							</CardBody>
						</Collapse>
					</Card>
				</Col>
				<Col xs={{ size: 12, order: 1 }} md={{ size: 5, order: 2 }}>
					<OrderSummary />
				</Col>
			</Row>
		</div>
	);
}

export default Checkout;
