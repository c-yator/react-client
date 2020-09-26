import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../partials/Landing';

import ProductCard from '../products/ProductCard';

import categories from '../../config/categories';

import { fetchAllProducts } from '../../redux/actions/productActions';

import { Spinner } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import Newsletter from '../partials/Newsletter';

function Home() {
	const productState = useSelector((state) => state.productState);
	const dispatch = useDispatch();
	const { allProducts, isLoading } = productState;
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<div>
			<Landing />
			<div className='container'>
				{isLoading ? (
					<Spinner className='d-block mx-auto mt-5' />
				) : (
					<>
						<div className='py-5'>
							<div className='d-flex justify-content-between'>
								<h5 className='font-weight-bold'>Special Offers</h5>
								<span>
									<Link to='/shop'>see all</Link>
								</span>
							</div>

							<Slider
								{...{
									infinite: true,
									speed: 500,
									slidesToShow: 3,
									slidesToScroll: 1,
									dots: true,
									arrows: true,
									autoplay: true,
									draggable: true,
									swipeToSlide: true,
									// centerMode: true,
									// pauseOnFocus: true,
									// pauseOnHover: true,
									// adaptiveHeight: true,
									// swipe: true,
									// focusOnSelect: true,
									responsive: [
										{
											breakpoint: 992,
											settings: {
												slidesToShow: 2,
												slidesToScroll: 1,
											},
										},
										{
											breakpoint: 768,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1,
												arrows: false,
											},
										},
										{
											breakpoint: 576,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1,
												arrows: false,
											},
										},
									],
								}}
							>
								{allProducts
									.filter((product) => product.category === 'offer')
									.map((product) => (
										<ProductCard
											key={product._id}
											name={product.name}
											price={product.price}
											priceType={product.priceType}
											img={`https://source.unsplash.com/1600x900/?${product.name}`}
										/>
									))}
							</Slider>
						</div>
						<div className='py-5'>
							<h5 className='font-weight-bold'>Our Products</h5>

							<div>
								{categories.map((category) => (
									<div key={category.id}>
										<div className='d-flex justify-content-between'>
											<h6 className='font-weight-bold text-capitalize'>
												{category.name}
											</h6>
											<span>
												<Link to='/shop'>see all</Link>
											</span>
										</div>
										<Slider
											{...{
												// infinite: true,
												speed: 500,
												slidesToShow: 4,
												slidesToScroll: 3,
												arrows: true,
												draggable: true,
												// swipeToSlide: true,
												// centerMode: true,
												// pauseOnFocus: true,
												// pauseOnHover: true,
												// adaptiveHeight: true,
												// swipe: true,

												// focusOnSelect: true,
												responsive: [
													{
														breakpoint: 992,
														settings: {
															slidesToShow: 3,
															slidesToScroll: 2,
															dots: false,
														},
													},
													{
														breakpoint: 768,
														settings: {
															slidesToShow: 2,
															slidesToScroll: 1,

															dots: false,
															arrows: false,
														},
													},
													{
														breakpoint: 576,
														settings: {
															slidesToShow: 1.8,
															slidesToScroll: 1,
															initialSlide: 2,
															dots: false,
															arrows: false,
														},
													},
												],
											}}
										>
											{allProducts
												.filter((product) => product.category === category.name)
												.map((product) => (
													<ProductCard
														key={product._id}
														name={product.name}
														price={product.price}
														priceType={product.priceType}
														img={`https://source.unsplash.com/1600x900/?${product.name},'vegetables'`}
													/>
												))}
										</Slider>
									</div>
								))}
							</div>
						</div>
						<div className='py-5'>
							<Newsletter />
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Home;
