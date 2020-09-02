import React from 'react';
import { Row, Col, Input, Button, Form, FormGroup, Label } from 'reactstrap';

function Footer() {
	return (
		<footer className='container-fluid bg-dark py-3'>
			<div className='container text-md-center text-white '>
				<Row>
					<Col sm='12' md='2' className='pb-sm-5'>
						<h5 className='font-weight-bold'>Socials</h5>
						<div>IG</div>
						<div>FB</div>
					</Col>
					<Col sm='12' md='2'>
						<h5 className='font-weight-bold'>Company</h5>
						<div>About us</div>
						<div>Privacy policy</div>
						<div>Terms and conditions</div>
					</Col>
					<Col sm='12' md='4'>
						<h5 className='font-weight-bold'>Contact Us</h5>
						<div>Call to order : 0700000000</div>
						<div>Customer care : 0720000000</div>
						<div>Email : yotefresh@info.co.ke</div>
					</Col>
					<Col sm='12' md='4'>
						<h5 className='font-weight-bold'>Subscribe to our newsletter</h5>
						<Form>
							<FormGroup>
								<Label htmlFor='email'>Email</Label>
								<Input type='text' id='email' />
							</FormGroup>

							<Button>Subscribe</Button>
						</Form>
					</Col>
				</Row>
			</div>
			<hr className='container' style={{ background: 'white' }} />
			<div className='text-center text-white'>&copy; Copyright yotefresh</div>
		</footer>
	);
}

export default Footer;
