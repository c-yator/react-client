import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Landing from '../partials/Landing';

import ProductCard from '../products/ProductCard';

import categories from '../../config/categories';

import { fetchAllProducts } from '../../redux/actions/productActions';

import { Spinner, Row, Col } from 'reactstrap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

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
											breakpoint: 1024,
											settings: {
												slidesToShow: 2,
												slidesToScroll: 1,
												dots: false,
											},
										},
										{
											breakpoint: 768,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1,
												initialSlide: 2,
												dots: false,
											},
										},
										{
											breakpoint: 480,
											settings: {
												slidesToShow: 1,
												slidesToScroll: 1,

												dots: false,
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
									<div>
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
														breakpoint: 1024,
														settings: {
															slidesToShow: 3,
															slidesToScroll: 2,
														},
													},
													{
														breakpoint: 768,
														settings: {
															slidesToShow: 2,
															slidesToScroll: 1,
															initialSlide: 2,
														},
													},
													{
														breakpoint: 480,
														settings: {
															slidesToShow: 1.5,
															slidesToScroll: 1,
															initialSlide: 0,

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
							<h5 className='font-weight-bold'>Why us?</h5>
							<Row className='text-center'>
								<Col sm='12' md='3'>
									col 1
								</Col>
								<Col sm='12' md='3'>
									col 2
								</Col>
								<Col sm='12' md='3'>
									col 3
								</Col>
								<Col sm='12' md='3'>
									col 4
								</Col>
							</Row>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Home;
