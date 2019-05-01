import React, { Component, Fragment } from 'react';

import { api } from '../api/api';
import { Header } from './Header';
import { CharactersList } from './CharactersList';
import { PAGES_LIMIT, NO_RESULTS_MESSAGE, X_TOTAL_COUNT } from '../helpers/variables';

class Main extends Component {
	state = {
		charactersList: [],
		currentPage: 1,
		charactersCount: null,
		pages: null,
	}

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentPage !== this.state.currentPage) {
			this.fetchData();
		}
	}

	fetchData = () => {
		fetch(api.getData(this.state.currentPage))
			.then(resp => {
				const charactersCount = resp.headers.get(X_TOTAL_COUNT);
				this.setState({
					charactersCount,
					pages: Math.round(charactersCount / PAGES_LIMIT),
				});
				return resp;
			})
			.then(resp => resp.json())
			.then(resp => this.setState({ charactersList: resp }));
	}

	getSearchResults = (results) => {
		this.setState({ charactersList: results });
	}

	handlePrevPageClick = () => {
		if (this.state.currentPage !== 1) {
			this.setState({ currentPage: this.state.currentPage - 1 });
		}
	}

	handleNextPageClick = () => {
		if (this.state.currentPage < this.state.pages) {
			this.setState({ currentPage: this.state.currentPage + 1 });
		}
	}

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	}

	renderCharactersList = () => {
		if (this.state.charactersList.length) {
			return (
				<CharactersList
					charactersList={this.state.charactersList}
					currentPage={this.state.currentPage}
					pages={this.state.pages}
					handlePrevPageClick={this.handlePrevPageClick}
					handleNextPageClick={this.handleNextPageClick}
					handlePageChange={this.handlePageChange}
				/>
			);
		}

		return <div>{NO_RESULTS_MESSAGE}</div>;
	}

	render() {
		return (
			<Fragment>
				<Header getSearchResults={this.getSearchResults} fetchData={this.fetchData} />
				{this.renderCharactersList()}
			</Fragment>
		);
	}
}
export default Main;