import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../partials/Landing';

import { fetchAllProducts } from '../../redux/actions/productActions';

import Newsletter from '../partials/Newsletter';

import ProductsCarousel from '../products/ProductsCarousel';
import OffersCarousel from '../products/OffersCarousel';

import Spinner from 'reactstrap/lib/Spinner';

function Home() {
	const productState = useSelector((state) => state.productState);

	const dispatch = useDispatch();
	const { isLoading } = productState;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<div>
			<Landing />
			<div className="container">
				{isLoading ? (
					<div className="d-flex justify-content-center py-5">
						<Spinner />
					</div>
				) : (
					<>
						<div className="py-5">
							<div className="d-flex justify-content-between">
								<h5 className="font-weight-bold">Special Offers</h5>
								<span>
									<Link to="/shop">see all</Link>
								</span>
							</div>

							<OffersCarousel />
						</div>
						<div className="py-5">
							<h5 className="font-weight-bold">Our Products</h5>
							<ProductsCarousel />
						</div>
					</>
				)}

				<div className="py-5">
					<Newsletter />
				</div>
			</div>
		</div>
	);
}

export default Home;
