import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  INPUT_NAME,
  INPUT_SPECIES,
  INPUT_GENDER,
  INVALID_FIELD_MESSAGE,
  GENDER_OPTIONS
} from '../helpers/variables';

export class RadioInput extends Component {
  static propTypes = {
    inputName: PropTypes.string.isRequired,
    inputState: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    speciesOptions: PropTypes.array.isRequired,
  }

  isRequired = (inputName) => (inputName === INPUT_NAME || inputName === INPUT_SPECIES || inputName === INPUT_GENDER);

  renderRequiredMessage = (inputName) => {
    if (this.isRequired(inputName)) {
      return <span className="text-primary">*</span>
    }

    return null;
  }

  renderValidationBlock = (inputName) => {
    if (this.isRequired(inputName)) {
      return (
        <div className="invalid-feedback">
          {INVALID_FIELD_MESSAGE}
        </div>
      )
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

  renderGenderOptions = () => {
    const { inputName, inputState, handleInputChange, inputRef } = this.props;

    return GENDER_OPTIONS.map((g, i) => (
      <div className="form-check" key={i}>
        <input
          id={g.label}
          className={inputState.valid ? "form-check-input" : "form-check-input is-invalid"}
          type="radio"
          name={inputName}
          value={g.value}
          onChange={handleInputChange}
          ref={inputRef}
          required
          checked={inputState.value === g.value}
        />
        {this.renderLabel(g.label)}
        {((i === (GENDER_OPTIONS.length - 1)) ? this.renderValidationBlock(inputName) : null)}
      </div>
    ))
  }

  render() {
    const { inputName } = this.props;

    return (
      <div className="form-group">
        {this.renderLabel(inputName)}
        {this.renderGenderOptions()}
      </div>
    )
  }
}