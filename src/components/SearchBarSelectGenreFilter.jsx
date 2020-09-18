import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarSelectFilter extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className="select-genre-filter-container">
        <label htmlFor="selectFilter" data-testid="select-input-label">
          Filtrar por gênero:
        </label>
        <select 
          name="selectFilter"
          id="selectFilter"
          value={selectedGenre} onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </div>
    );
  }
}

SearchBarSelectFilter.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBarSelectFilter;
