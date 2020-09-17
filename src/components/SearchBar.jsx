// implement SearchBar component here
import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  SelectRender() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    )
  }
  
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textinput">
          Inclui o texto:
          <input 
          type="text" value={searchText} onChange={onSearchTextChange} 
          data-testid="text-input" id="textinput"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="fav">
          Mostrar somente favoritos:
          <input 
          type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
          data-testid="checkbox-input" id="fav"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select">
          Filtrar por gênero:  
          {this.SelectRender()}
        </label>
      </form>
    )}};

SearchBar.propTypes = {
  searchText : propTypes.string.isRequired,
  onSearchTextChange : propTypes.func.isRequired,
  bookmarkedOnly: propTypes.bool.isRequired,
  onBookmarkedChange: propTypes.func.isRequired,
  selectedGenre: propTypes.string.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
}
export default SearchBar;
