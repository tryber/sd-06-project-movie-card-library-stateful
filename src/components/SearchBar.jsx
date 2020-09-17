import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props
    return (
      <select
        id="filtrarGenero"value={selectedGenre} onChange={onSelectedGenreChange}
        data-testid="select-input"
      >
        <option value={''} data-testid="select-option">Todos</option>
        <option value={'action'} data-testid="select-option">Ação</option>
        <option value={'comedy'} data-testid="select-option">Comédia</option>
        <option value={'thriller'} data-testid="select-option">Suspense</option>
      </select>
    );
  }
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="incluiOTexto" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="incluiOTexto" type="text" value={searchText} onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>
          <label htmlFor="mostraFavoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="mostraFavoritos" type="checkbox" checked={bookmarkedOnly}
              onChange={onBookmarkedChange} data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="filtrarGenero" data-testid="select-input-label">
            Filtrar por gênero
          {this.renderSelect()}
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
