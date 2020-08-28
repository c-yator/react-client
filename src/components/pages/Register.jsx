import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	FormFeedback,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import withRedirect from '../Hoc/withRedirect';

function Register() {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (values) => {
		console.log('register new user', values);
	};

	return (
		<Form className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<Label for='username'>Username</Label>
				<Input
					invalid
					type='text'
					name='username'
					id='username'
					placeholder='username'
					innerRef={register({
						required: 'username field is required',
						maxLength: {
							value: 30,
							message:
								'username length must be less than or equal to 30 characters long',
						},
						minLength: {
							value: 3,
							message: 'username length must be at least 3 characters long',
						},
					})}
				/>
				<FormFeedback>
					{errors?.username && errors.username?.message}
				</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for='email'>Email</Label>
				<Input
					invalid
					type='email'
					name='email'
					id='email'
					placeholder='email'
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
				<Label for='password'>Password</Label>
				<Input
					invalid
					type='password'
					name='password'
					id='password'
					placeholder='password'
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
			<FormText className='float-right'>
				<span className='px-1'>already registered?</span>
				<Link to='/login'>Log in</Link>
			</FormText>
			<Button>Register</Button>
		</Form>
	);
}

export default withRedirect(Register);
