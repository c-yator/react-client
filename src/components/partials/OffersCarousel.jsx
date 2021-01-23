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
			responsive={responsive}
			autoPlay
			containerClass="py-3"
		>
			{allProducts
				.filter((product) => product.category === 'offer')
				.map(({ _id, name, price, priceType, image }) => (
					<ProductCard
						key={_id}
						id={_id}
						name={name}
						price={price}
						priceType={priceType}
						image={`http://localhost:5000/api/products/image/${image}`}
						// img={'https://source.unsplash.com/1600x900/?vegetables'}
					/>
				))}
		</Carousel>
	);
}

export default OffersCarousel;
