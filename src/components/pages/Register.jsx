import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	FormFeedback,
} from 'reactstrap';

import withRedirect from '../Hoc/withRedirect';

import { register as registerUser } from '../../redux/actions/authActions';
import PageTitle from '../partials/PageTitle';
import Container from 'reactstrap/lib/Container';

function Register() {
	const { register, errors, handleSubmit } = useForm();
	const dispatch = useDispatch();

	const onSubmit = (values) => {
		console.log('register new user', values);
		dispatch(registerUser(values));
	};

	return (
		<Container className="py-3">
			<PageTitle name="Register" />

			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormGroup>
					<Label for="username">Username</Label>
					<Input
						{...(errors.username && { invalid: true })}
						type="text"
						name="username"
						id="username"
						placeholder="username"
						innerRef={register({
							required: 'username field is required',
							maxLength: {
								value: 30,
								message:
									'User name length must be less than or equal to 30 characters long',
							},
							minLength: {
								value: 2,
								message: 'User name length must be at least 2 characters long',
							},
						})}
					/>
					<FormFeedback>
						{errors?.username && errors.username?.message}
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input
						{...(errors.email && { invalid: true })}
						type="email"
						name="email"
						id="email"
						placeholder="email"
						innerRef={register({
							required: 'email field is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'please enter a valid email addresss',
							},
						})}
					/>
					<FormFeedback>{errors?.email && errors.email?.message}</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="password">Password</Label>
					<Input
						{...(errors.password && { invalid: true })}
						type="password"
						name="password"
						id="password"
						placeholder="password"
						innerRef={register({
							required: 'password field is required',
							maxLength: {
								value: 30,
								message:
									'password length must be less than or equal to 30 characters long',
							},
							minLength: {
								value: 8,
								message: 'password length must be at least 8 characters long',
							},
						})}
					/>
					<FormFeedback>
						{errors?.password && errors.password?.message}
					</FormFeedback>
				</FormGroup>
				<FormText className="float-right">
					<span className="px-1">already registered?</span>
					<Link to="/login">Log in</Link>
				</FormText>
				<Button type="submit">Register</Button>
			</Form>
		</Container>
	);
}

export default withRedirect(Register);
