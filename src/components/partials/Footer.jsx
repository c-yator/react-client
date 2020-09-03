import React from 'react';
import { Row, Col, Input, Button, Form, FormGroup, FormText } from 'reactstrap';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer
			className='container-fluid bg-dark py-3'
			style={{ position: 'absolute', bottom: 0 }}
		>
			<div className='container text-white '>
				<Row>
					<Col sm='12' md='2' className='text-center'>
						<h5 className='font-weight-bold'>Socials</h5>
						<div>
							<a href='#'>
								<FaInstagram size='1em' />
							</a>
						</div>
						<div>
							<a href='#'>
								<FaFacebook size='1em' />
							</a>
						</div>
					</Col>
					<Col sm='12' md='2' className='text-center'>
						<h5 className='font-weight-bold'>Company</h5>
						<div>
							<Link to='/about'>About us</Link>
						</div>
						<div>
							<Link to='/privacy-policy'>Privacy policy</Link>
						</div>
						<div>
							<Link to='/terms-and-conditions'>Terms and conditions</Link>
						</div>
					</Col>
					<Col sm='12' md='4' className='text-center'>
						<div>
							<h5 className='font-weight-bold'>Contact Us</h5>
							<div>Call to order : 0700000000</div>
							<div>Customer care : 0720000000</div>
							<div>Email : yotefresh@info.co.ke</div>
						</div>
					</Col>
					<Col sm='12' md='4'>
						<div>
							<h5 className='font-weight-bold'>Subscribe to our newsletter</h5>
							<Form>
								<FormGroup>
									<FormText>Dont miss out on our latest offers!</FormText>
								</FormGroup>

								<FormGroup>
									<Input
										type='text'
										id='email'
										placeholder='Enter email address'
									/>
								</FormGroup>

								<Button>Subscribe</Button>
							</Form>
						</div>
					</Col>
				</Row>
				<hr style={{ background: 'white' }} />
				<div className='text-center text-white'>&copy; Copyright yotefresh</div>
			</div>
		</footer>
	);
}

export default Footer;
