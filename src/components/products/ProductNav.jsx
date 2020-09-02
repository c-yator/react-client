import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabContent, Nav, NavItem, NavLink, Spinner } from 'reactstrap';
import classnames from 'classnames';

import ProductTabPane from './ProductTabPane';

import categories from '../../config/categories';

const ProductNav = () => {
	const productState = useSelector((state) => state.productState);
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Nav tabs>
				{categories.map((category) => (
					<NavItem key={category.id}>
						<NavLink
							className={classnames({ active: activeTab === category.id })}
							onClick={() => {
								toggle(category.id);
							}}
						>
							<span className='text-capitalize'>{category.name}</span>
						</NavLink>
					</NavItem>
				))}
			</Nav>
			<TabContent activeTab={activeTab}>
				{productState.allProducts.isLoading ? (
					<Spinner className='d-block mx-auto mt-5' />
				) : (
					<ProductTabPane categories={categories} />
				)}
			</TabContent>
		</div>
	);
};

export default ProductNav;
