import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	INPUT_NAME,
	INPUT_SPECIES,
	INPUT_GENDER,
	INVALID_FIELD_MESSAGE,
} from '../helpers/variables';

export class TextInput extends Component {
	static propTypes = {
		inputName: PropTypes.string.isRequired,
		inputState: PropTypes.object.isRequired,
		handleInputChange: PropTypes.func.isRequired,
		inputRef: PropTypes.func.isRequired,
	}

	isRequired = (inputName) => (inputName === INPUT_NAME || inputName === INPUT_SPECIES || inputName === INPUT_GENDER);

	renderRequiredMessage = (inputName) => {
		if (this.isRequired(inputName)) {
			return <span className="text-primary">*</span>;
		}

		return null;
	}

	renderValidationBlock = (inputName) => {
		if (this.isRequired(inputName)) {
			return (
				<div className="invalid-feedback">
					{INVALID_FIELD_MESSAGE}
				</div>
			);
		}

		return null;
	}

	renderLabel = (inputName) => (
		<Fragment>
			<label
				htmlFor={inputName}
			>
				{`${inputName.charAt(0).toUpperCase()}${inputName.slice(1)}`}
			</label>
			{this.renderRequiredMessage(inputName)}
		</Fragment>
	)

	render() {
		const { inputName, inputState, handleInputChange, inputRef } = this.props;

		return (
			<div className="form-group">
				{this.renderLabel(inputName)}
				<input
					id={inputName}
					name={inputName}
					type="text"
					className={inputState.valid ? 'form-control' : 'form-control is-invalid'}
					onChange={handleInputChange}
					value={inputState.value}
					required={inputName === INPUT_NAME}
					ref={inputRef}
				/>
				{this.renderValidationBlock(inputName)}
			</div>
		);
	}
}