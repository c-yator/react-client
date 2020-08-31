import React from 'react';
import { Row, Col, Input, Button, Form, FormGroup, Label } from 'reactstrap';

function Footer() {
	return (
		<footer className='container-fluid bg-dark py-3 '>
			<div className='container text-md-center text-white '>
				<Row>
					<Col sm='12' md='2'>
						<h5 className='font-weight-bold'>Socials</h5>
						<div>IG</div>
						<div>FB</div>
					</Col>
					<Col sm='12' md='2'>
						<h5 className='font-weight-bold'>Company</h5>
						<div>About</div>
						<div>Terms</div>
						<div>Privacy</div>
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

				<hr style={{ background: 'white' }} />
				<div>copy</div>
			</div>
		</footer>
	);
}

export default Footer;
