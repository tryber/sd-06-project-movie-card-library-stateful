import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
  render() {
 
    return(
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
          Inclui o texto:
            <input type="text" value={this.props.searchText} data-testid="text-input" onChange={this.props.onSearchTextChange} />
            </label>
            <label data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input type="checkbox" checked={this.props.bookmarkedOnly} data-testid="checkbox-input" onChange={this.props.onBookmarkedChange} />
            </label>
            <label data-testid="select-input-label">
            Filtrar por gênero
              <select value={this.props.selectedGenre} data-testid="select-input" onChange={this.props.onSelectedGenreChange} >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
              </select>
            </label>
        </form>
      </div>

    );
  }
}



export default SearchBar;
