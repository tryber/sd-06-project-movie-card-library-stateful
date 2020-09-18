import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectGenre extends Component {
  render() {
    return (
      <div>
        <label data-testid="select-input-label" htmlFor="selectedGenre">Filtrar por gênero:
          <select
            data-testid="select-input" name="selectedGenre" value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
