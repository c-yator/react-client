import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

import categories from '../../config/categories';

function ProductsCarousel() {
	const productState = useSelector((state) => state.productState);
	const { allProducts } = productState;
	const responsive = {
		xl: {
			breakpoint: { max: 4000, min: 992 },
			items: 3,
			partialVisibilityGutter: 50,
		},
		lg: {
			breakpoint: { max: 992, min: 768 },
			items: 2,
			partialVisibilityGutter: 50,
		},
		md: {
			breakpoint: { max: 768, min: 576 },
			items: 1,
			partialVisibilityGutter: 200,
		},
		sm: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			partialVisibilityGutter: 40,
		},
	};

	return (
		<div>
			{categories.map((category) => (
				<div key={category.id}>
					<div className="d-flex justify-content-between">
						<h6 className="font-weight-bold text-capitalize">
							{category.name}
						</h6>
						<span>
							<Link to="/shop">see all</Link>
						</span>
					</div>
					<Carousel
						removeArrowOnDeviceType={['md', 'sm']}
						infinite
						partialVisible={true}
						responsive={responsive}
					>
						{allProducts
							.filter((product) => product.category === category.name)
							.map((product) => (
								<ProductCard
									key={product._id}
									id={product._id}
									name={product.name}
									price={product.price}
									priceType={product.priceType}
									img={`https://source.unsplash.com/1600x900/?${product.name},'vegetables'`}
								/>
							))}
					</Carousel>
				</div>
			))}
		</div>
	);
}

export default ProductsCarousel;
