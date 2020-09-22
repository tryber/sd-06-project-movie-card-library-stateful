import React from 'react';
import PropType from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ [target.name]: target.value });
  }
  onBookmarkedChange({ target }) {
    this.setState({ [target.name]: target.checked });
  }
  onSelectedGenreChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, onBookmarkedChange, onSelectedGenreChange, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
            name="searchText"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            className="text-input"
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
            value={bookmarkedOnly}
            checked="bookmarkedOnly"
            name="bookmarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero:
          <select
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
            name="selectedGenre"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propType = {
  searchText: PropType.string.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
}.isRequired;

export default SearchBar;
