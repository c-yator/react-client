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

	return (
		<>
			{isLoading ? (
				<div className="d-flex justify-content-center py-5">
					<Spinner />
				</div>
			) : (
				categories.map((category) => (
					<TabPane key={category.id} tabId={category.id}>
						<Row>
							{allProducts
								.filter((product) => product.category === category.name)
								.map(({ _id, name, price, priceType, image }) => (
									<Col key={_id} sm="12" md="6" lg="4" xl="3">
										<ProductCard
											id={_id}
											name={name}
											price={price}
											priceType={priceType}
											image={`http://localhost:5000/api/products/image/${image}`}
											// img={`https://source.unsplash.com/1600x900/?${product.name},'vegetables'`}
										/>
									</Col>
								))}
						</Row>
					</TabPane>
				))
			)}
		</>
	);
}

export default ProductTabPane;
