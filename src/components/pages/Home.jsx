import React from 'react';

import Landing from '../partials/Landing';
import ProductSlider from '../products/ProductSlider';

function Home() {
	return (
		<div>
			<Landing />
			<div className='container'>
				<div className='py-5'>
					<h5 className='font-weight-bold'>Special Offers</h5>
				</div>
				<div className='py-5'>
					<h5 className='font-weight-bold'>Our Products</h5>
				</div>
			</div>
		</div>
	);
}

export default Home;
