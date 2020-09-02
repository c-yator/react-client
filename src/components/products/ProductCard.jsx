import React from 'react';
import { Card, CardImg, Button, CardFooter, CardHeader } from 'reactstrap';

const ProductCard = ({ name, price, priceType, img }) => {
	return (
		<Card className='my-2'>
			<CardHeader>
				<span className='text-capitalize font-weight-bold'>{name}</span>
				<span className='font-weight-bold float-right'>{`KES ${price}(${priceType})`}</span>
			</CardHeader>
			<CardImg top width='100%' src={img} alt='img' />

			<CardFooter className='p-0'>
				<Button className='w-100'>Add to cart</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
