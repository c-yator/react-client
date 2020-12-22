import React, { useState } from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	Button,
	Media,
} from 'reactstrap';

import mpesa from '../../images/mpesa.png';
import card from '../../images/card.png';
import paypal from '../../images/paypal.png';

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
						<span>Mpesa</span>
						<Media
							style={{ maxWidth: '50px' }}
							object
							src={mpesa}
							alt="mpesa logo"
						/>
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
						<span>Debit/Credit Card</span>

						<Media
							style={{ maxWidth: '50px' }}
							object
							src={card}
							alt="mpesa logo"
						/>
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

						<span>Paypal</span>
						<Media
							style={{ maxWidth: '50px' }}
							object
							src={paypal}
							alt="mpesa logo"
						/>
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
