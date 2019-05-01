import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Search } from './Search';
import { LIST_VIEW_TITLE, ADD_NEW_TITLE } from '../helpers/variables';

export class Header extends Component {
	static propTypes = {
		getSearchResults: PropTypes.func.isRequired,
		fetchData: PropTypes.func.isRequired,
	}

	renderTitle = () => (
		<h1>{LIST_VIEW_TITLE}</h1>
	);

	renderAddNewComponent = () => (
		<div className="col-sm-6 text-sm-right">
			<Link to='/addCharacter'>
				<span className="btn btn-primary mb-3">{ADD_NEW_TITLE}</span>
			</Link>
		</div>
	)

	renderMenu = () => (
		<div className="row">
			<Search getSearchResults={this.props.getSearchResults} fetchData={this.props.fetchData} />
			{this.renderAddNewComponent()}
		</div>
	);

	render() {
		return (
			<Fragment>
				{this.renderTitle()}
				{this.renderMenu()}
			</Fragment>
		);
	}
}