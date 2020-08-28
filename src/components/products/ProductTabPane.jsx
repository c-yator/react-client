import React from 'react';
import { useSelector } from 'react-redux';
import { TabPane, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
function ProductTabPane({ categories }) {
	const productState = useSelector((state) => state.productState);
	const {
		allProducts: { value },
	} = productState;

	return categories.map((category) => (
		<TabPane key={category.id} tabId={category.id}>
			<Row>
				{value
					.filter((product) => product.category === category.name)
					.map((product) => (
						<Col key={product._id} sm='12' md='6' lg='4' xl='3'>
							<ProductCard
								name={product.name}
								price={product.price}
								priceType={product.priceType}
							/>
						</Col>
					))}
			</Row>
		</TabPane>
	));
}

export default ProductTabPane;
