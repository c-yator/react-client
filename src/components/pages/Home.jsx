import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner, Container } from 'reactstrap';

//actions
import { fetchAllProducts } from '../../redux/actions/productActions';
import { fetchAllOffers } from '../../redux/actions/offerActions';

//partials
import Landing from '../partials/Landing';
import OffersCarousel from '../partials/OffersCarousel';
import ProductsCarousel from '../partials/ProductsCarousel';
import Newsletter from '../partials/Newsletter';

function Home() {
	const productState = useSelector((state) => state.productState);
	const offerState = useSelector((state) => state.offerState);
	const dispatch = useDispatch();
	const { productIsLoading } = productState;
	const { offerIsLoading } = offerState;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);
	useEffect(() => {
		dispatch(fetchAllOffers());
	}, [dispatch]);

	return (
		<div>
			<Landing />
			<Container>
				{productIsLoading && offerIsLoading ? (
					<div className="d-flex justify-content-center py-5">
						<Spinner />
					</div>
				) : (
					<>
						<div className="py-5">
							<div className="d-flex justify-content-between">
								<h5 className="font-weight-bold">Special Offers</h5>
								<span>
									<Link to="/offers">see all</Link>
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
