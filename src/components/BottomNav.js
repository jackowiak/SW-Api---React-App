import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { OPTIONS_PREVIOUS, OPTIONS_NEXT } from '../helpers/variables';

export class BottomNav extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handleNextPageClick: PropTypes.func.isRequired,
    handlePrevPageClick: PropTypes.func.isRequired,
  }

  renderItems = () => {
    const { currentPage, pages, handlePageChange } = this.props;
    const pagesButtons = Array.from({ length: pages }, (v, i) => i + 1);

    return pagesButtons.map((page, i) => {
      if (page !== currentPage) {
        return (
          <li className="page-item" key={i} onClick={() => handlePageChange(page)}>
            <span className="page-link">{page}</span>
          </li>
        )
      }

      return (
        <li className="page-item active" key={i}>
          <span className="page-link">{page} <span className="sr-only">(current)</span></span>
        </li>
      )
    })
  }

  getPreviousItemClass = () => (this.props.currentPage === 1) ? 'page-item disabled' : 'page-item';

  renderPreviousItem = () => (
    <li className={this.getPreviousItemClass()} onClick={this.props.handlePrevPageClick}>
      <span className="page-link" tabIndex="-1">{OPTIONS_PREVIOUS}</span>
    </li>
  )

  getNextItemClass = () => (this.props.currentPage === this.props.pages) ? 'page-item disabled' : 'page-item';

  renderNextItem = () => (
    <li className={this.getNextItemClass()} onClick={this.props.handleNextPageClick}>
      <span className="page-link">{OPTIONS_NEXT}</span>
    </li>
  )

  renderPaginationList = () => (
    <ul className="pagination justify-content-end">
      {this.renderPreviousItem()}
      {this.renderItems()}
      {this.renderNextItem()}
    </ul>
  );

  render() {
    return (
      <nav aria-label="Data grid navigation">
        {this.renderPaginationList()}
      </nav>
    )
  }
}