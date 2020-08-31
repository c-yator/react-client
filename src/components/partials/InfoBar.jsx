import React from 'react';
import { Navbar, NavbarText } from 'reactstrap';
function InfoBar() {
	return (
		<Navbar color='light' light>
			<div className='font-weight-bold py-0 ml-auto'>
				<NavbarText className=' px-2'>Call to order : 0700000000</NavbarText>
				<NavbarText className=' px-2 '>Customer care : 0720000000</NavbarText>
			</div>
		</Navbar>
	);
}

export default InfoBar;
