import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { SingleCharacterView } from './SingleCharacterView';
import { BottomNav } from './BottomNav';
import { TABLE_COLUMS } from '../helpers/variables';

export class CharactersList extends Component {
	static propTypes = {
		charactersList: PropTypes.array.isRequired,
		currentPage: PropTypes.number.isRequired,
		pages: PropTypes.number.isRequired,
		handlePageChange: PropTypes.func.isRequired,
		handleNextPageClick: PropTypes.func.isRequired,
		handlePrevPageClick: PropTypes.func.isRequired,
	}

	renderCharacters = () => {
		const { charactersList } = this.props;

		if (charactersList.length) {
			return charactersList.map(character => <SingleCharacterView key={character.id} character={character} />);
		}

		return null;
	}

	renderCharactersTableCols = () => TABLE_COLUMS.map((col, i) => <th scope="col" key={i}>{col}</th>);

	renderCharactersTableHead = () => (
		<thead className="thead-light">
			<tr>
				{this.renderCharactersTableCols()}
			</tr>
		</thead>
	);

	renderCharacterTableBody = () => (
		<tbody>
			{this.renderCharacters()}
		</tbody>
	);

	renderCharactersTable = () => (
		<table className="table table-bordered table-hover">
			{this.renderCharactersTableHead()}
			{this.renderCharacterTableBody()}
		</table>
	);

	render() {
		const { currentPage, handlePrevPageClick, handleNextPageClick, pages, handlePageChange } = this.props;
		return (
			<Fragment>
				{this.renderCharactersTable()}
				<BottomNav
					currentPage={currentPage}
					handlePrevPageClick={handlePrevPageClick}
					handleNextPageClick={handleNextPageClick}
					pages={pages}
					handlePageChange={handlePageChange}
				/>
			</Fragment>
		);
	}
}