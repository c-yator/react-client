import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

function OffersCarousel() {
	const productState = useSelector((state) => state.productState);
	const { allProducts } = productState;
	const responsive = {
		lg: {
			breakpoint: { max: 4000, min: 768 },
			items: 2,
		},
		sm: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	};

	return (
		<Carousel
			infinite
			showDots
			arrows={false}
			responsive={responsive}
			autoPlay
			containerClass="py-3"
		>
			{allProducts
				.filter((product) => product.category === 'offer')
				.map((product) => (
					<ProductCard
						key={product._id}
						id={product._id}
						name={product.name}
						price={product.price}
						priceType={product.priceType}
						img={`https://source.unsplash.com/1600x900/?${product.name}`}
					/>
				))}
		</Carousel>
	);
}

export default OffersCarousel;
