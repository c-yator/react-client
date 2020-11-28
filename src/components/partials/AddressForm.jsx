import React from 'react';
import {
	Form,
	FormGroup,
	Input,
	Label,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormFeedback,
} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import { useForm } from 'react-hook-form';

function AddressForm() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log('data', data);
	console.log('errors', errors);
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<Label for="firstName">First name</Label>
				<Input
					{...(errors.firstName && { invalid: true })}
					type="text"
					name="firstName"
					id="firstName"
					innerRef={register({
						required: 'First name is required',
						maxLength: {
							value: 30,
							message:
								'First name length must be less than or equal to 30 characters long',
						},
						minLength: {
							value: 2,
							message: 'First name length must be at least 2 characters long',
						},
					})}
				/>
				<FormFeedback>
					{errors?.firstName && errors.firstName?.message}
				</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="lastName">Last name</Label>
				<Input
					{...(errors.lastName && { invalid: true })}
					type="text"
					name="lastName"
					id="lastName"
					innerRef={register({
						required: 'Last name is required',
						maxLength: {
							value: 30,
							message:
								'Last name length must be less than or equal to 30 characters long',
						},
						minLength: {
							value: 2,
							message: 'Last name length must be at least 2 characters long',
						},
					})}
				/>
				<FormFeedback>
					{errors?.lastName && errors.lastName?.message}
				</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="mobilePhoneNumber1">Mobile phone number 1</Label>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>+254</InputGroupText>
					</InputGroupAddon>
					<Input
						{...(errors.mobilePhoneNumber1 && { invalid: true })}
						type="tel"
						name="mobilePhoneNumber1"
						id="mobilePhoneNumber1"
						placeholder="use the format 705495536 or 105495536"
						innerRef={register({
							required: 'Mobile phone number 1 is required',
							maxLength: {
								value: 10,
								message:
									'mobile phone number length must not exceed 10 characters',
							},
							minLength: {
								value: 9,
								message:
									'mobile phone number must be atleast 9 characters long',
							},
						})}
					/>
					<FormFeedback>
						{errors?.mobilePhoneNumber1 && errors.mobilePhoneNumber1?.message}
					</FormFeedback>
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<Label for="mobilePhoneNumber2">Mobile phone number 2 (optional)</Label>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText>+254</InputGroupText>
					</InputGroupAddon>
					<Input
						{...(errors.mobilePhoneNumber2 && { invalid: true })}
						type="tel"
						name="mobilePhoneNumber2"
						id="mobilePhoneNumber2"
						placeholder="use the format 705495536 or 105495536"
						innerRef={register({
							maxLength: {
								value: 10,
								message:
									'mobile phone number length must not exceed 10 characters',
							},
							minLength: {
								value: 9,
								message:
									'mobile phone number must be atleast 9 characters long',
							},
						})}
					/>
					<FormFeedback>
						{errors?.mobilePhoneNumber2 && errors.mobilePhoneNumber2?.message}
					</FormFeedback>
				</InputGroup>
			</FormGroup>
			<FormGroup>
				<Label for="address">Delivery Address</Label>
				<Input
					{...(errors.address && { invalid: true })}
					type="textarea"
					name="address"
					id="address"
					innerRef={register({ required: 'Delivery address is required' })}
				/>
				<FormFeedback>
					{errors?.address && errors.address?.message}
				</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="county">County</Label>
				<Input
					{...(errors.county && { invalid: true })}
					type="select"
					name="county"
					id="county"
					innerRef={register({ required: 'please select your county' })}
				>
					<option value="">Select county</option>
					<option value="UasinGishu">Uasin Gishu</option>
				</Input>
				<FormFeedback>{errors?.county && errors.county?.message}</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="town">Town</Label>
				<Input
					{...(errors.town && { invalid: true })}
					type="select"
					name="town"
					id="town"
					innerRef={register({ required: 'please select your town' })}
				>
					<option value="">Select town</option>
					<option value="EldoretEast">Eldoret east</option>
					<option value="EldoretCBD">Eldoret CBD</option>
				</Input>
				<FormFeedback>{errors?.town && errors.town?.message}</FormFeedback>
			</FormGroup>
			<Button type="submit">Next</Button>
		</Form>
	);
}

export default AddressForm;
