import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  filterByGenderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <label data-testid="select-input-label" htmlFor="select">
Filtrar por gênero
          <select
            name="select"
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>


    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <div>
        <form id='data-testid="search-bar-form'>
          <div>
            <label data-testid="text-input-label" htmlFor="x">
Inclui o Texto
              <input
                name="x"
                data-testid="text-input"
                value={searchText}
                onChange={onSearchTextChange}
                type="text"
              />
            </label>
          </div>
          <div>
            <label data-testid="checkbox-input-label" htmlFor="checkbox">
Mostrar somente favoritos
              <input
                name="checkbox"
                type="checkbox"
                data-testid="checkbox-input"
                onChange={onBookmarkedChange}
                checked={bookmarkedOnly}
              />
            </label>
          </div>
          <div />

          {this.filterByGenderSelect()}
        </form>

      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
