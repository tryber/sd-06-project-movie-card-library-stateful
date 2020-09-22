import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label
            HTMLFor="SearchText"
            data-testid="text-input-label"
          >
          Inclui o texto:
            <input
              type="text"
              name="SearchText"
              value={this.props.searchText}
              data-testid="text-input"
              onChange={this.props.onSearchTextChange}
            />
          </label>
          <label
            HTMLFor="bookmarkedOnly"
            data-testid="checkbox-input-label"
          >
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={this.props.bookmarkedOnly}
            data-testid="checkbox-input"
            onChange={this.props.onBookmarkedChange}
          />
          </label>
          <label
            HTMLFor="selectedGenre"
            data-testid="select-input-label"
          >
          Filtrar por gênero
            <select
              value={this.props.selectedGenre}
              name="selectedGenre"
              data-testid="select-input"
              onChange={this.props.onSelectedGenreChange}
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
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
  onSelectedGenreChange:  PropTypes.func.isRequired,
}

export default SearchBar;
