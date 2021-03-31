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
import { getImage } from './../../config/getImage';
import Totals from './Totals';

function OrderSummary() {
	const { cart } = useSelector((state) => state.cartState);

	return (
		<div className="py-3 py-md-0">
			<Card>
				<CardHeader>Order Summary</CardHeader>
				<CardBody className="py-3">
					{cart.map(({ id, name, price, priceType, quantity, image }) => (
						<Row className="py-2" key={id}>
							<Col>
								<div className="d-flex">
									<Media
										style={{ maxHeight: '80px' }}
										object
										src={getImage(image)}
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
					<Totals cart={cart} />
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
