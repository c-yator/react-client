import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Media,
} from 'reactstrap';

function OrderSummary() {
	const { cart } = useSelector((state) => state.cartState);

	const subtotal = cart.reduce(
		(total, { price, quantity }) => total + price * quantity,
		0
	);

	const deliveryFees = 20;

	const total = subtotal + deliveryFees;

	return (
		<div className="py-3 py-md-0">
			<Card>
				<CardHeader>Order Summary</CardHeader>
				<CardBody className="py-3">
					{cart.map(({ id, name, price, priceType, quantity }) => (
						<Row className="py-2" key={id}>
							<Col>
								<div className="d-flex">
									<Media
										style={{ maxHeight: '80px' }}
										object
										src={`https://source.unsplash.com/1600x900/?vegetables`}
										alt="Product image"
										className="mr-2"
									/>
									<div>
										<p className="m-0 text-capitalize">{name}</p>
										<small>{`Price: KES.${price} ${priceType}`}</small>
										<br />
										<small>{`quantity: ${quantity}`}</small>
									</div>
								</div>
							</Col>
						</Row>
					))}

					<hr />
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
				</CardBody>
				<CardFooter>
					<Button tag={Link} to="/cart" className="w-100">
						Modify Cart
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default OrderSummary;
