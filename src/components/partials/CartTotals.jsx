import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ButtonGroup, Button } from 'reactstrap';

function CartTotals({ cart, subtotal }) {
	return (
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
					</Col>
					<Col className="d-flex flex-column align-items-end" xs="6">
						<div>KES.{subtotal}</div>

						<div>
							<small>* Delivery fees are not included</small>
						</div>
					</Col>
				</Row>

				<Row className="py-3">
					<Col className="d-flex flex-column align-items-end" xs="12">
						<ButtonGroup>
							<Button color="primary" outline tag={Link} to="/shop">
								Go to shop
							</Button>
							{cart.length > 0 && (
								<Button tag={Link} to="/checkout">
									checkout
								</Button>
							)}
						</ButtonGroup>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default CartTotals;
