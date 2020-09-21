import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectedGenre from './SelectedGenre';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">Inclui o texto:
            <input
              data-testid="text-input" name="searchText" type="text"
              value={this.props.searchText} onChange={this.props.onSearchTextChange}
            />
          </label>
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input" name="bookmarkedOnly" type="checkbox"
              checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
            />
          </label>
          <SelectedGenre
            selectedGenre={this.props.selectedGenre}
            onSelectedGenreChange={this.props.onSelectedGenreChange}
          />
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

export default SearchBar;
