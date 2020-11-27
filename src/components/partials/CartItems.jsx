import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Media, Input } from 'reactstrap';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import {
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
} from '../../redux/actions/cartActions';

function CartItems({ id, name, price, priceType, quantity }) {
	const dispatch = useDispatch();
	return (
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
						<MdKeyboardArrowUp onClick={() => dispatch(increaseQuantity(id))} />
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
	);
}

export default CartItems;
