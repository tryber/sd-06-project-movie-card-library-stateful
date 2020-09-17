import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  renderSelect() {
    // const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select-input">
      Filtrar por gênero
      <select
        value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}
        data-testid="select-input"
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
      </label>
    );
  }

  render() {
    // const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChang } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto
        <input
          type="text"
          data-testid="text-input"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        </label>
        {this.renderSelect()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequire,
  onSearchTextChange: PropTypes.func.isRequire,
  bookmarkedOnly: PropTypes.bool.isRequire,
  onBookmarkedChange: PropTypes.func.isRequire,
  selectedGenre: PropTypes.string.isRequire,
  onSelectedGenreChange: PropTypes.func.isRequire,
}.isRequire;
export default SearchBar;
