import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {

  renderSelectOptions() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select-input-label">
      Filtrar por gênero:
        <select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
          id="select-input-label"
        >
          <option value="" data-testid="select-option"> Todos </option>
          <option value="action" data-testid="select-option"> Ação </option>
          <option value="comedy" data-testid="select-option"> Comédia </option>
          <option value="thriller" data-testid="select-option"> Suspense </option>
        </select>
      </label>
    );
  }

  renderImputText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="text-input-label">
      Inclui o texto:
        <input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          id="text-input-label"
        />
      </label>
    );
  }

  renderCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input-label">
      Mostrar somente favoritos:
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
          id="checkbox-input-label"
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">

          <div>
            {this.renderImputText()}
          </div>

          <div>
            {this.renderCheckbox()}
          </div>

          <div>
            {this.renderSelectOptions()}
          </div>

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

