import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner, Container } from 'reactstrap';

//actions
import { fetchAllProducts } from '../../redux/actions/productActions';

//partials
import Landing from '../partials/Landing';
import OffersCarousel from '../partials/OffersCarousel';
import ProductsCarousel from '../partials/ProductsCarousel';
import Newsletter from '../partials/Newsletter';

function Home() {
	const productState = useSelector((state) => state.productState);

	const dispatch = useDispatch();
	const { isLoading } = productState;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<div className="pb-3">
			<Landing />
			<Container>
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
			</Container>
		</div>
	);
}

export default Home;
