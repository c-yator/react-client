import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';

function Totals({ render }) {
	const { cart } = useSelector((state) => state.cartState);
	const subtotal = cart.reduce(
		(total, { price, quantity }) => total + price * quantity,
		0
	);

	const deliveryFees = 0;

	const total = subtotal + deliveryFees;

	return (
		<>
			<Row>
				<Col>
					<div className="d-flex justify-content-md-between">
						<span>Subtotal:</span>
						<span>{`KES.${subtotal}`}</span>
					</div>
					<div className="d-flex justify-content-md-between">
						<span>Delivery Fees</span>
						<span>{`KES.${deliveryFees}`}</span>
					</div>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<div className="d-flex justify-content-md-between font-weight-bold">
						<span>Total:</span>
						<span>{`KES.${total}`}</span>
					</div>
				</Col>
			</Row>
			{render && render(total)}
		</>
	);
}

export default Totals;
