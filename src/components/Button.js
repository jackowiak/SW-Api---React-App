import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    btn: PropTypes.object.isRequired,
  }

  render() {
    const { btn } = this.props;

    return (
      <button type="button" className={btn.btnClassName}>
        <i className={btn.iClassName} aria-hidden="true" /> {btn.type}
      </button>
    )
  }
}