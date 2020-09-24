import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.GetDropdown = this.GetDropdown.bind(this);

    /* this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };*/
  }

  GetDropdown() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="dropdown" >
        Filtrar por gênero
        <select
          id="dropdown" data-testid="select-input" name="selectedGenre"
          value={selectedGenre} onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label >
    );
  }

  render() {
    const { searchText, bookmarkedOnly, onSearchTextChange, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search">
          Inclui o texto
          <input
            id="search" data-testid="text-input"
            type="text" name="searchText"
            value={searchText} onChange={onSearchTextChange}
          />
        </label>
        <input type="submit" value="Submit" /> <br />
        <label data-testid="checkbox-input-label" htmlFor="favorite-checkbox">
          Mostrar somente favoritos
          <input
            id="favorite-checkbox" data-testid="checkbox-input"
            type="checkbox" name="bookmarkedOnly"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
            value={bookmarkedOnly}
          />
        </label> <br />
        <this.GetDropdown />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
