import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  onSearchTextChange = ({ target }) => this.setState({ [target.name]: target.value });
  onSelectedGenreChange = ({ target }) => this.setState({ [target.name]: target.checked });
  onBookMarkedChange = ({ target }) => this.setState({ [target.name]: targe.value })

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onBookMarkedChange,
      onSearchTextChange,
      onSelectedGenreChange
    } = this.props;
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
            checked="bookMarkedOnly"
            type="checkbox"
            value={bookmarkedOnly}
            data-testid="checkbox-input"
            className="text-input"
            onChange={onBookMarkedChange}
            name="bookMarkedOnly"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero:
          <select
            data-testid="select-input"
            onChange={onSelectedGenreChange}
            value={selectedGenre}
            name="selectGenre"
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


SearchBar.propTypes = {
  searchText: PropTypes.string, isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectGenre: PropTypes.string.isRequired,
}.isRequired;

export default SearchBar;
