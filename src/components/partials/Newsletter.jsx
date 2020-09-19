import React from 'react';
import { Form, FormGroup, FormText, Input, Button } from 'reactstrap';

function Newsletter() {
	return (
		<div className='w-50'>
			<h5 className='font-weight-bold'>Subscribe to our newsletter</h5>
			<Form>
				<FormGroup>
					<FormText>Dont miss out on our latest offers!</FormText>
				</FormGroup>

				<FormGroup>
					<Input type='text' id='email' placeholder='Enter email address' />
				</FormGroup>

				<Button>Subscribe</Button>
			</Form>
		</div>
	);
}

export default Newsletter;
