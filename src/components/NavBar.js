import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { options } from '../helpers/variables';

class NavBar extends Component {
  static propTypes = {
    onToggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }

  renderButton = () => {
    const { onToggle, isOpen } = this.props;

    return (
      <button type="button"
        onClick={() => onToggle()}
        className={'navbar-toggler' + (!isOpen ? ' collapsed' : '')}
        aria-expanded={isOpen}
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    )
  };

  renderListView = () => {
    const { isOpen } = this.props;

    return (
      <div className={'collapse navbar-collapse' + (isOpen ? ' show' : '')}>
        <ul className=" navbar-nav">
          <li className=" nav-item active">
            <Link to="/" className="nav-link">
              {options.listView}
              <span className=" sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
        <Link to="/" className="navbar-brand">{options.title}</Link>
        {this.renderButton()}
        {this.renderListView()}
      </nav>
    )
  }
}

export default NavBar;