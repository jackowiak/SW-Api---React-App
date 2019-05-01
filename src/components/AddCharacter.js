import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';
import { RadioInput } from './RadioInput';
import { api } from '../api/api';
import {
	INPUT_NAME,
	INPUT_SPECIES,
	INPUT_GENDER,
	INPUT_HOMEWORLD,
	MESSAGE_SUBMIT,
	GENDER_OPTIONS
} from '../helpers/variables';

class AddCharacter extends Component {
	state = {
		[INPUT_NAME]: {
			value: '',
			valid: true,
		},
		[INPUT_SPECIES]: {
			value: '',
			valid: true,
		},
		[INPUT_GENDER]: {
			value: GENDER_OPTIONS[0].value,
			valid: true,
		},
		[INPUT_HOMEWORLD]: {
			value: '',
			valid: true,
		},
		speciesOptions: [],
		isSubmitting: false,
		shouldRedirect: false,
	}

	componentDidMount() {
		this.fetchSpecies();
	}

	fetchSpecies = () => {
		return fetch(api.fetchSpecies())
			.then(resp => resp.json())
			.then(resp => this.setState({
				speciesOptions: resp,
				[INPUT_SPECIES]: {
					...this.state[INPUT_SPECIES],
					value: resp.length ? resp[0] : '',
				},
			}));
	}

	renderTextInput = (inputName) => (
		<TextInput
			inputName={inputName}
			inputState={this.state[inputName]}
			handleInputChange={this.handleInputChange}
			inputRef={input => this[inputName] = input}
		/>
	)

	renderSelectInput = (inputName) => (
		<SelectInput
			inputName={inputName}
			inputState={this.state[inputName]}
			handleInputChange={this.handleInputChange}
			speciesOptions={this.state.speciesOptions}
			inputRef={input => this[inputName] = input}
		/>
	)

	renderRadioInput = (inputName) => (
		<RadioInput
			inputName={inputName}
			inputState={this.state[inputName]}
			handleInputChange={this.handleInputChange}
			speciesOptions={this.state.speciesOptions}
			inputRef={input => this[inputName] = input}
		/>
	)

	renderSubmitButton = () => (
		<button
			type="submit"
			className="btn btn-primary"
			onClick={this.handleSubmit}
			disabled={this.state.isSubmitting}
		>
			{MESSAGE_SUBMIT}
		</button>
	)

	focusTopInvalidForm = (invalidForms) => this[invalidForms[0]].focus();

	markFormAsInvalid = (form) => {
		this.setState({
			[form]: {
				...this.state[form],
				valid: false,
			}
		});
	}

	validateForm = () => {
		const forms = [INPUT_NAME, INPUT_SPECIES, INPUT_GENDER];
		const invalidForms = forms.filter(form => !this.state[form].value ? form : null);

		if (invalidForms.length) {
			invalidForms.forEach(form => this.markFormAsInvalid(form));

			this.focusTopInvalidForm(invalidForms);

			return this.stopSubmitting();
		}

		return this.submitCharacter();
	}

	getCharacterData = () => (
		{
			[INPUT_NAME]: this.state[INPUT_NAME].value,
			[INPUT_SPECIES]: this.state[INPUT_SPECIES].value,
			[INPUT_GENDER]: this.state[INPUT_GENDER].value,
			[INPUT_HOMEWORLD]: this.state[INPUT_HOMEWORLD].value,
		}
	)

	submitCharacter = () => {
		this.startSubmitting();

		const character = this.getCharacterData();

		return fetch(api.submitCharacter(), {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(character)
		})
			.then(resp => resp.json())
			.then(() => {
				this.stopSubmitting();
				this.redirect();
			})
			.catch(() => {
				this.stopSubmitting();
			});
	}

	redirect = () => this.setState({ shouldRedirect: true });
	startSubmitting = () => this.setState({ isSubmitting: true });
	stopSubmitting = () => this.setState({ isSubmitting: false });

	renderRedirect = () => {
		if (this.state.shouldRedirect) {
			return <Redirect to='/' />;
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.validateForm();
	}

	handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: {
				...this.state[name],
				value: value,
				valid: !!value,
			},
		});
	}

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<form>
					{this.renderTextInput(INPUT_NAME)}
					{this.renderSelectInput(INPUT_SPECIES)}
					{this.renderRadioInput(INPUT_GENDER)}
					{this.renderTextInput(INPUT_HOMEWORLD)}
					{this.renderSubmitButton()}
				</form>
			</div>
		);
	}
}

export default AddCharacter;