import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Container, Spinner } from 'reactstrap';
import ProductTabPane from '../partials/ProductTabPane';

import { fetchAllProducts } from '../../redux/actions/productActions';
import useLocalStorage from '../partials/custom_hooks/useLocalStorage';

function Shop({ location: { state } }) {
	const productState = useSelector((state) => state.productState);
	const [activeTab, setActiveTab] = useLocalStorage('category', 'veggies');
	const { allProducts, productIsLoading } = productState;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch, activeTab]);

	// useEffect(() => {
	// 	state && setActiveTab(state.from);
	// }, [state, setActiveTab]);

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="py-3">
			{productIsLoading ? (
				<div className="d-flex justify-content-center py-5">
					<Spinner />
				</div>
			) : (
				<>
					<Nav tabs>
						{Array.from(
							new Set(allProducts.map(({ category }) => category))
						).map((category, index) => (
							<NavItem key={index}>
								<NavLink
									className={classnames({ active: activeTab === category })}
									onClick={() => {
										toggle(category);
									}}
								>
									<span className="text-capitalize">{category}</span>
								</NavLink>
							</NavItem>
						))}
					</Nav>
					<TabContent activeTab={activeTab}>
						<ProductTabPane allProducts={allProducts} />
					</TabContent>
				</>
			)}
		</Container>
	);
}

export default Shop;
