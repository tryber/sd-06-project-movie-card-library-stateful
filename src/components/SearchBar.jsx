import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.GetSelect = this.GetSelect.bind(this);
  }

  GetSelect() {
    const { handleChange, selectedGenre } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="dropdown" >
        Filtrar por gênero
        <select
          id="dropdown" data-testid="select-input" name="selectedGenre"
          value={selectedGenre} onChange={handleChange}
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
    const { searchText, bookmarkedOnly, handleChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="inputSearch"
        >
          Inclui o texto
          <input
            id="inputSearch"
            data-testid="text-input"
            type="text" name="searchText"
            value={searchText}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <br />
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkFavorite"
        >
          Mostrar somente favoritos
          <input
            id="checkFavorite"
            data-testid="checkbox-input"
            type="checkbox"
            onChange={handleChange}
            value={bookmarkedOnly}
          />
        </label>
        <br />
        <this.GetSelect />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
