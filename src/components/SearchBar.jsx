import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderSelect() {
    return (
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
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">Inclui o texto:
            <input
              data-testid="text-input" type="text" name="searchText" value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            Mostrar somente favoritos:
            <input
              data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly"
              checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
            />
          </label>
          {this.renderSelect()}
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
