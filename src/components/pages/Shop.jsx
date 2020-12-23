import React, { useState } from 'react';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import ProductTabPane from '../partials/ProductTabPane';
import categories from '../../config/categories';
import Container from 'reactstrap/lib/Container';

function Shop() {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Container className="py-3">
			<Nav tabs>
				{categories.map((category) => (
					<NavItem key={category.id}>
						<NavLink
							className={classnames({ active: activeTab === category.id })}
							onClick={() => {
								toggle(category.id);
							}}
						>
							<span className="text-capitalize">{category.name}</span>
						</NavLink>
					</NavItem>
				))}
			</Nav>
			<TabContent activeTab={activeTab}>
				<ProductTabPane categories={categories} />
			</TabContent>
		</Container>
	);
}

export default Shop;
