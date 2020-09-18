import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class SearchBar extends Component {
  render() {
    const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const onBookmarkedChange = this.props.onBookmarkedChange;
    const selectedGenre = this.props.selectedGenre;
    const onSelectedGenreChange = this.props.onSelectedGenreChange;
    return (
      <div>
        <form data-testid="search-bar-form">
          <TextInput searchText={searchText} onSearchTextChange={onSearchTextChange} />
          <label
            htmlFor="check"
            data-testid="checkbox-input-label"
          >Mostrar somente favoritos</label>
          <input
            id="check"
            type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="selec" data-testid="select-input-label">Filtrar por gênero</label>
          <select
            id="selec"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;

SearchBar.defaultProps = {
  searchText: {},
  onSearchTextChange: {},
  bookmarkedOnly: {},
  onBookmarkedChange: {},
  selectedGenre: {},
  onSelectedGenreChange: {},
};
SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
