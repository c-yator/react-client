import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormGroup,
	FormText,
	Input,
	Button,
	FormFeedback,
} from 'reactstrap';

//actions
import { subscribeToNewsletter } from '../../redux/actions/newsletterActions';

function Newsletter() {
	const { register, errors, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const onSubmit = (values) => {
		dispatch(subscribeToNewsletter(values));
	};

	return (
		<div>
			<h5 className="font-weight-bold">Subscribe to our newsletter</h5>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<FormText>Dont miss out on our latest offers!</FormText>
				</FormGroup>

				<FormGroup>
					<Input
						{...(errors.email && { invalid: true })}
						type="email"
						name="email"
						id="email"
						autocomplete="off"
						placeholder="Enter email address..."
						innerRef={register({
							required: 'email cannot be empty',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'please enter a valid email addresss',
							},
						})}
					/>
					<FormFeedback>{errors?.email && errors.email?.message}</FormFeedback>
				</FormGroup>

				<Button>Subscribe</Button>
			</Form>
		</div>
	);
}

export default Newsletter;
