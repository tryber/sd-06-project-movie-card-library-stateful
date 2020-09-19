import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  text() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <div>
        <label
          data-testid="text-input-label"
          htmlFor="text"
        >
          Inclui o texto:
          <input
            data-testid="text-input"
            id="text"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
      </div>
    );
  }

  checkBox() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox"
        >
          Mostrar somente favoritos:
          <input
            data-testid="checkbox-input"
            id="checkbox"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
      </div>
    );
  }

  select() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <label
          data-testid="select-input-label"
          htmlFor="select"
        >
          Filtrar por gênero:
          <select
            data-testid="select-input"
            id="select"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value=""> Todos </option>
            <option data-testid="select-option" value="action"> Ação </option>
            <option data-testid="select-option" value="comedy"> Comédia </option>
            <option data-testid="select-option" value="thriller"> Suspense </option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          {this.text()}
          {this.checkBox()}
          {this.select()}
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
