import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { getSubtotal } from '../../redux/actions/cartActions';

function OrderSummary() {
	const { cart, subtotal } = useSelector((state) => state.cartState);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSubtotal());
	}, [dispatch]);

	const deliveryFees = 20;

	const total = subtotal + deliveryFees;

	return (
		<div className="py-3 py-md-0">
			<Card>
				<CardHeader>Order Summary</CardHeader>
				<CardBody className="py-3">
					{cart.map(({ id, name, price, priceType }) => (
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
