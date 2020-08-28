import React, { useState } from 'react';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import ProductTabPane from './ProductTabPane';

const ProductNav = () => {
	const [activeTab, setActiveTab] = useState('1');
	const [categories] = useState([
		{ id: '1', name: 'fruits' },
		{ id: '2', name: 'veggies' },
		{ id: '3', name: 'cereals' },
	]);

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
							{category.name}
						</NavLink>
					</NavItem>
				))}
			</Nav>
			<TabContent activeTab={activeTab}>
				<ProductTabPane categories={categories} />
			</TabContent>
		</div>
	);
};

export default ProductNav;
