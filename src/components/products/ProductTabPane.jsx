import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TabPane, Row, Col, Spinner } from 'reactstrap';
import ProductCard from './ProductCard';

import { fetchAllProducts } from '../../redux/actions/productActions';

function ProductTabPane({ categories }) {
	const productState = useSelector((state) => state.productState);
	const dispatch = useDispatch();
	const { allProducts, isLoading } = productState;

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return isLoading ? (
		<Spinner className='d-block mx-auto mt-5' />
	) : (
		categories.map((category) => (
			<TabPane key={category.id} tabId={category.id}>
				<Row>
					{allProducts
						.filter((product) => product.category === category.name)
						.map((product) => (
							<Col key={product._id} sm='12' md='6' lg='4' xl='3'>
								<ProductCard
									name={product.name}
									price={product.price}
									priceType={product.priceType}
									img={`https://source.unsplash.com/1600x900/?${product.name},'vegetables'`}
								/>
							</Col>
						))}
				</Row>
			</TabPane>
		))
	);
}

export default ProductTabPane;
