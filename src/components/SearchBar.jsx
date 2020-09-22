import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  // criar funções para resolver o problema que o cc aponta de numero de caracteres
  // e numero de linhas. Esta solução eu vi no plantão.
  renderSelectByText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="searchText"
        data-testid="text-input-label"
      >
        Inclui o texto
        <input
          type="text"
          name="searchText"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </label>
    );
  }

  renderSelectByFav() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="bookmarkedOnly"
        data-testid="checkbox-input-label"
      >
      Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          value={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  renderSelectByGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="selectedGenre"
        data-testid="select-input-label"
      >
      Filtrar por gênero
        <select
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        {/* aqui chama as funções para resolver o problema apontado pelo codeclimate */}
        {this.renderSelectByText()}
        {this.renderSelectByFav()}
        {this.renderSelectByGenre()}
      </form>
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
