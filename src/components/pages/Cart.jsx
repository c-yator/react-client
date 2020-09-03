import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
function Cart() {
	return (
		<div className='container py-3'>
			<Button tag={Link} to='/checkout'>
				checkout
			</Button>
		</div>
	);
}

export default Cart;
