import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.selectGenre = this.selectGenre.bind(this);
  }

  selectGenre() {
    return (
      <label data-testid="select-input-label" htmlFor="selectedGenre">Filtrar por gênero:
        <select
          data-testid="select-input" name="selectedGenre" value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange} className="inputChecked"
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
      <div>
        <form data-testid="search-bar-form" className="containerSearchBar">
          <label
            data-testid="text-input-label" htmlFor="searchText" className="label"
          >Inclui o texto:
            <input
              data-testid="text-input" type="text" name="searchText" value={this.props.searchText}
              onChange={this.props.onSearchTextChange} className="inputTxt"
            />
          </label>
          <div className="containerChecked">
            <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
              Mostrar somente favoritos:
              <input
                data-testid="checkbox-input" type="checkbox" name="bookmarkedOnly"
                checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
                className="inputChecked"
              />
            </label>
          </div>
          {this.selectGenre()}
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
