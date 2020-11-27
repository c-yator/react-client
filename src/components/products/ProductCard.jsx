import React from 'react';
import { useDispatch } from 'react-redux';
import {
	Card,
	CardImg,
	Button,
	CardFooter,
	CardHeader,
	ButtonGroup,
} from 'reactstrap';
import { IoMdHeart } from 'react-icons/io';

import { addToCart } from '../../redux/actions/cartActions';

// const ProductCard = ({ name, price, priceType, img }) => {
const ProductCard = ({ id, name, price, priceType, img }) => {
	const dispatch = useDispatch();

	const product = {
		id,
		name,
		price,
		priceType,
		img,
	};

	return (
		<Card className="my-2">
			<CardHeader>
				<span className="text-capitalize font-weight-bold">{name}</span>
				<span className="font-weight-bold float-right">{`KES ${price}(${priceType})`}</span>
			</CardHeader>
			<CardImg top width="100%" src={img} alt="img" />

			<CardFooter className="p-0">
				<ButtonGroup className="w-100">
					<Button
						className="w-75"
						onClick={() => dispatch(addToCart({ product }))}
					>
						Add to cart
					</Button>
					<Button color="dark" className="w-25">
						<IoMdHeart />
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
