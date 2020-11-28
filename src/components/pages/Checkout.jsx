import React from 'react';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import Accordion from '../partials/Accordion';
import OrderSummary from '../partials/OrderSummary';
import AddressForm from '../partials/AddressForm';
import PaymentForm from '../partials/PaymentForm';

function Checkout() {
	return (
		<div className="container py-3">
			<h5>Checkout</h5>

			<Row>
				<Col xs={{ size: 12, order: 2 }} md={{ size: 7, order: 1 }}>
					<Accordion defaultOpenState={true} title="1. DELIVERY ADDRESS">
						<AddressForm />
					</Accordion>
					<Accordion defaultOpenState={false} title="2. PAYMENT METHOD">
						<h6>Choose payment method</h6>
						<PaymentForm />
					</Accordion>
				</Col>
				<Col xs={{ size: 12, order: 1 }} md={{ size: 5, order: 2 }}>
					<OrderSummary />
				</Col>
			</Row>
		</div>
	);
}

export default Checkout;
