import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { api } from '../api/api';
import { debounce } from '../helpers/helpers';
import { SEARCH_TITLE } from '../helpers/variables';

export class Search extends Component {
  static propTypes = {
    getSearchResults: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return this.search();
    }
  }

  search = debounce(() => {
    if (!!this.state.value) {
      return fetch(api.search(this.state.value))
        .then(resp => resp.json())
        .then(resp => this.props.getSearchResults(resp))
    }

    return this.props.fetchData();
  }, 200);

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  };

  render() {
    return (
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="searchInput" className="sr-only">{SEARCH_TITLE}</label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}