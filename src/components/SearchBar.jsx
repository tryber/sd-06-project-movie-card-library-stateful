import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(){
    super();
	}
	
  render() {
    return (
      <form>
        <label htmlFor="text-input-label">Inclui o texto
          <input htmlFor="text-input" value="" onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="checkbox-input-label">Mostrar somente os favoritos
          <input htmlFor="checkbox-input" onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="select-input-label">Filtrar por gênero
          <select htmlFor="select-input" onChange={this.handleChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  movies: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func, 
    bookmarkedOnly: PropTypes.bool,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
