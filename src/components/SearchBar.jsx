import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectGenre from './SelectGenre';

export default class SearchBar extends Component {

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
          <SelectGenre />
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
};
