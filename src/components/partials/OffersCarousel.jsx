import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';

import ProductCard from './ProductCard';

function OffersCarousel() {
	const offerState = useSelector((state) => state.offerState);
	const { allOffers } = offerState;

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
			{allOffers.map(({ _id, name, price, priceType, image }) => (
				<ProductCard
					key={_id}
					id={_id}
					name={name}
					price={price}
					priceType={priceType}
					image={image}
				/>
			))}
		</Carousel>
	);
}

export default OffersCarousel;
