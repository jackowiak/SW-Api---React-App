import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	INPUT_NAME,
	INPUT_SPECIES,
	INPUT_GENDER,
	INVALID_FIELD_MESSAGE,
} from '../helpers/variables';

export class SelectInput extends Component {
	static propTypes = {
		inputName: PropTypes.string.isRequired,
		inputState: PropTypes.object.isRequired,
		handleInputChange: PropTypes.func.isRequired,
		speciesOptions: PropTypes.array.isRequired,
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

	renderSpeciesOptions = () => {
		if (this.props.speciesOptions.length) {
			return this.props.speciesOptions.map((specie, i) => (
				<option
					id={specie}
					value={specie}
					key={i}
				>
					{specie}
				</option>
			)
			);
		}

		return null;
	}

	render() {
		const { inputName, inputState, handleInputChange, inputRef } = this.props;
		return (
			<div className="form-group">
				{this.renderLabel(inputName)}
				<select
					className={inputState.valid ? 'form-control' : 'form-control is-invalid'}
					id={inputName}
					value={inputState.value}
					onChange={handleInputChange}
					name={inputName}
					ref={inputRef}
					required
				>
					{this.renderSpeciesOptions()}
				</select>
				{this.renderValidationBlock(inputName)}
			</div>
		);
	}
}