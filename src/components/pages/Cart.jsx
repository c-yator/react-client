import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import CartItems from '../partials/CartItems';
import CartTotals from '../partials/CartTotals';

function Cart() {
	const { cart } = useSelector((state) => state.cartState);

	return (
		<Container className="py-3">
			<Row className="bg-secondary p-2 text-white">
				<Col xs="5" sm="6">
					<div>Products</div>
				</Col>
				<Col xs="5" sm="3">
					<div>Quantity</div>
				</Col>
				<Col className="d-flex justify-content-end" xs="2" sm="3">
					<div>Price</div>
				</Col>
			</Row>

			{cart.map(({ id, name, price, priceType, quantity }) => (
				<CartItems
					key={id}
					id={id}
					name={name}
					price={price}
					priceType={priceType}
					quantity={quantity}
				/>
			))}

			<CartTotals />
		</Container>
	);
}

export default Cart;
