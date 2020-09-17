import React from 'react';
import PropTypes from 'prop-types';
import AddMovieInput from './AddMovieInput';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <AddMovieInput
          labelTestid="text-input-label" id="text-input" label="Inclui o texto" inputType="text"
          testid="text-input" callback={this.props.onSearchTextChange}
          value={this.props.searchText}
        />
        <label data-testid="checkbox-input-label" htmlFor="fav-checkbox">
          Mostrar somente favoritos</label>
        <input
          type="checkbox" checked={this.props.bookmarkedOnly} id="fav-checkbox"
          onChange={this.props.onBookmarkedChange} data-testid="checkbox-input"
        />
        <label data-testid="select-input-label" htmlFor="movie-type">
          Filtrar por gênero</label>
        <select
          id="movie-type" value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange} data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
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
// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback
