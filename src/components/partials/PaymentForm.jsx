import React, { useState } from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	Button,
} from 'reactstrap';

function PaymentForm() {
	const [paymentMethod, setPaymentMethod] = useState('mpesa');

	return (
		<Form>
			<FormGroup tag="fieldset">
				<FormGroup check>
					<Label check>
						<Input
							type="radio"
							name="payment"
							value="mpesa"
							checked={paymentMethod === 'mpesa'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						Mpesa
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input
							type="radio"
							name="payment"
							value="card"
							checked={paymentMethod === 'card'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						Debit/Credit Card
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input
							type="radio"
							name="payment"
							value="paypal"
							checked={paymentMethod === 'paypal'}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						Paypal
					</Label>
				</FormGroup>
			</FormGroup>
			<Card>
				<CardBody className="py-5">
					{paymentMethod === 'mpesa' && <div>Mpesa</div>}
					{paymentMethod === 'card' && <div>Debit/Credit card</div>}
					{paymentMethod === 'paypal' && <div>Paypal</div>}
				</CardBody>
				<Button className="w-100">Pay</Button>
			</Card>
		</Form>
	);
}

export default PaymentForm;
