import React from 'react';
import { useDispatch } from 'react-redux';
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
import { useForm } from 'react-hook-form';

//hoc
import withRedirect from '../Hoc/withRedirect';
//actions
import { login } from '../../redux/actions/authActions';

function Login() {
	const { register, errors, handleSubmit } = useForm();

	const dispatch = useDispatch();

	const onSubmit = (values) => {
		console.log('login credentials', values);
		dispatch(login(values));
	};
	return (
		<div className="container py-3 ">
			<h5 className="font-weight-bold">Login</h5>

			<Form onSubmit={handleSubmit(onSubmit)}>
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
						})}
					/>
					<FormFeedback>
						{errors?.password && errors.password?.message}
					</FormFeedback>
				</FormGroup>
				<FormText className="float-right">
					<span className="px-1">Dont have an account?</span>
					<Link to="/register">Register</Link>
				</FormText>
				<Button type="submit">Log in</Button>
			</Form>
		</div>
	);
}

export default withRedirect(Login);
