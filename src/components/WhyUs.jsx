import React from 'react';
import { Row, Col } from 'reactstrap';

import { IoIosCash, IoIosLeaf, IoIosCar } from 'react-icons/io';
function WhyUs() {
	return (
		<>
			<h5 className='font-weight-bold'>Why us?</h5>
			<Row className='text-center'>
				<Col sm='12' md='4'>
					<IoIosLeaf size='5em' />
					<h6 className='font-weight-bold'>Guaranteed fresh produce</h6>
				</Col>
				<Col sm='12' md='4'>
					<IoIosCar size='5em' />
					<h6 className='font-weight-bold'>Fast local delivery</h6>
				</Col>
				<Col sm='12' md='4'>
					<IoIosCash size='5em' />
					<h6 className='font-weight-bold'>secure checkout options</h6>
				</Col>
			</Row>
		</>
	);
}

export default WhyUs;
