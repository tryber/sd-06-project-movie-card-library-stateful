// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label" >Inclui o texto</label>
          <input
            id="text-input"
            data-testid="text-input"
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label" >
            Mostrar somente favoritos
          </label>
          <input
            id="checkbox-input"
            data-testid="checkbox-input"
            name="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            
          />
          <label htmlFor="select-input" data-testid="select-input-label" >
            Filtrar por gênero
          </label>
          <select
            id="select-input"
            data-testid="select-input"
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value=""> Todos </option>
            <option data-testid="select-option" value="action"> Ação </option>
            <option data-testid="select-option" value="comedy"> Comédia </option>
            <option data-testid="select-option" value="thriller"> Suspense </option>
          </select>
        </form>
      </section>
    );
  }
}

function getDefaulProps() {
  return {
    onSearchTextChange: this.onSearchTextChange.bind(this),
    onBookmarkedChange: this.onBookmarkedChange.bind(this),
    onSelectedGenreChange: this.onSelectedGenreChange.bind(this),
  };
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: getDefaulProps,
  bookmarkedOnly: false,
  onBookmarkedChange: getDefaulProps,
  selectedGenre: '',
  onSelectedGenreChange: getDefaulProps,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
