import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  selectGenre = () => {
    return (
      <select
        id="genre"
        value={this.props.selectedGenre}
        data-testid="select-input"
        onChange={this.props.onSelectedGenreChange}
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    )
  };

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text"
          data-testid="text-input"
          id="search"
          onChange={this.props.onSearchTextChange}
          value={this.props.searchText}
        />
        <label htmlFor="check" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
          id="check"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
          data-testid="checkbox-input"
        />
        <label data-testid="select-input-label" htmlFor="genre">Filtrar por gênero</label>
        {this.selectGenre()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onBookmarkedChange: PropTypes.func,
  onSelectedGenreChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};

SearchBar.defaultProps = {
  searchText: 'Search',
  onSearchTextChange: '',
  onBookmarkedChange: '',
  onSelectedGenreChange: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
