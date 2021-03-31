import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Totals from './Totals';

//actions
import { mobilePaymentRequest } from '../../redux/actions/mobilePaymentActions';

function PaymentForm() {
	const [paymentMethod, setPaymentMethod] = useState('mpesa');

	const { cart } = useSelector((state) => state.cartState);
	const { address } = useSelector((state) => state.userState);

	const dispatch = useDispatch();
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
							alt="paypal logo"
						/>
					</Label>
				</FormGroup>
			</FormGroup>
			<Card>
				<CardBody>
					{paymentMethod === 'mpesa' && (
						<>
							<Totals
								render={(total) => (
									<Button
										className="w-100 mt-3"
										onClick={() =>
											dispatch(
												mobilePaymentRequest(
													total,
													`254${address.mobilePhoneNumber}`,
													cart.map((item) => item.id)
												)
											)
										}
									>
										Pay
									</Button>
								)}
							/>
						</>
					)}
					{paymentMethod === 'card' && <div>Debit/Credit card</div>}
					{paymentMethod === 'paypal' && <div>Paypal</div>}
				</CardBody>
			</Card>
		</Form>
	);
}

export default PaymentForm;
