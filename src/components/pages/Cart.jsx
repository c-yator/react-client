import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Button,
	Col,
	Row,
	Container,
	ButtonGroup,
	Input,
	Media,
} from 'reactstrap';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import Product from '../../images/1.jpeg';
import Alert from 'reactstrap/lib/Alert';

import {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from '../../redux/actions/cartActions';

function Cart() {
	const { cart } = useSelector((state) => state.cartState);
	const dispatch = useDispatch();

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
			{cart && cart.length > 0 ? (
				<>
					{cart.map(({ id, name, price, priceType, quantity }) => (
						<Row className="py-3" key={id}>
							<Col xs="4" sm="6">
								<div className="d-flex flex-wrap">
									<Media
										style={{ maxHeight: '80px' }}
										object
										src={`https://source.unsplash.com/1600x900/?${name},'vegetables'`}
										alt="Product image"
										className="mr-2"
									/>
									<div>
										<p className="m-0 text-capitalize">{name}</p>
										<small>{`Price: KES.${price} ${priceType}`}</small>
										<br />

										<Button
											className="p-0"
											color="link"
											onClick={() => dispatch(removeFromCart(id))}
										>
											<small> Remove</small>
										</Button>
									</div>
								</div>
							</Col>
							<Col xs="6" sm="3" className="pr-0">
								<div className="d-flex flex-wrap">
									<Input className="w-50 mr-1" type="number" value={quantity} />
									<div className="d-flex flex-column py-1">
										<MdKeyboardArrowUp
											onClick={() => dispatch(increaseQuantity(id))}
										/>
										<MdKeyboardArrowDown
											onClick={() => dispatch(decreaseQuantity(id))}
										/>
									</div>
								</div>
							</Col>
							<Col className="d-flex justify-content-end pl-0" xs="2" sm="3">
								<div>KES.{quantity * price}</div>
							</Col>
						</Row>
					))}

					<Row className="d-flex justify-content-end">
						<Col md="6">
							<Row>
								<Col xs="12">
									<hr className="bg-secondary" />
								</Col>
							</Row>
							<Row>
								<Col xs="6">
									<div>Subtotal:</div>
									<div>Tax:</div>
									<div>Total:</div>
								</Col>
								<Col className="d-flex flex-column align-items-end" xs="6">
									<div>KES.120</div>
									<div>KES.20</div>
									<div>KES.120</div>
									<div>
										<small>* Delivery fees are not included</small>
									</div>
								</Col>
							</Row>

							<Row className="py-3">
								<Col className="d-flex flex-column align-items-end" xs="12">
									<ButtonGroup>
										<Button color="primary" outline tag={Link} to="/checkout">
											Continue to shop
										</Button>
										<Button tag={Link} to="/checkout">
											checkout
										</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</Col>
					</Row>
				</>
			) : (
				<Row className="py-2">
					<Alert color="danger" className="w-100">
						Your cart is empty!
					</Alert>
				</Row>
			)}
		</Container>
	);
}

export default Cart;
