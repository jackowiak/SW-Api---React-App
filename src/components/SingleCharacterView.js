import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import { buttons } from '../helpers/variables';

export class SingleCharacterView extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired,
  }

  renderButtonGroup = () => (
    <td>
      <div className="btn-group btn-group-sm" role="group" aria-label="Actions">
        {buttons.map((btn, i) => <Button btn={btn} key={i} />)}
      </div>
    </td>
  );

  renderCharacterDetails = () => {
    const { character: { id, name, species, gender, homeworld } } = this.props;

    return (
      <Fragment>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{species}</td>
        <td>{gender}</td>
        <td>{homeworld}</td>
      </Fragment>
    )
  }

  render() {
    return (
      <tr>
        {this.renderCharacterDetails()}
        {this.renderButtonGroup()}
      </tr>
    )
  }
}