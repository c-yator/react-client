import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductNav from '../products/ProductNav';

import { fetchAllProducts } from '../../redux/actions/productActions';

function Shop() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<div>
			<ProductNav />
		</div>
	);
}

export default Shop;
