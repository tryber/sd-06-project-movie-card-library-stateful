// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="searchText"
        data-testid="text-input-label"
      >
        Inclui o texto
        <input
          type="text"
          data-testid="text-input"
          name="searchText"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  inputCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="check"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          name="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  inputSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select"
        data-testid="select-input-label"
      >
      Filtrar por gênero
        <select
          data-testid="select-input"
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
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
      <form data-testid="search-bar-form">
        {this.inputText()}
        {this.inputCheckBox()}
        {this.inputSelect()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
};

export default SearchBar;
