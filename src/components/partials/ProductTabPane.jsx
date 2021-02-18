import React from 'react';
import { TabPane, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';

function ProductTabPane({ allProducts }) {
	return (
		<>
			{Array.from(new Set(allProducts.map(({ category }) => category))).map(
				(category, index) => (
					<TabPane key={index} tabId={category}>
						<Row>
							{allProducts
								.filter((product) => product.category === category)
								.map(({ _id, name, price, priceType, image }) => (
									<Col key={_id} sm="12" md="6" lg="4" xl="3">
										<ProductCard
											id={_id}
											name={name}
											price={price}
											priceType={priceType}
											image={image}
										/>
									</Col>
								))}
						</Row>
					</TabPane>
				)
			)}
		</>
	);
}

export default ProductTabPane;
