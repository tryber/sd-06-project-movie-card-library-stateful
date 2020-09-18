import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import MovieList from './MovieList'

export default class SearchBar extends Component {

  constructor() {
    super();

    // binds
    this.createSearchTextAndCheckBox = this.createSearchTextAndCheckBox.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
  }

  // func to create input elements
  createSearchTextAndCheckBox() {
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="searchText">Inclui o texto:
        <input
          name="searchText"
          data-testid="text-input"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          data-testid="checkbox-input"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        </label>
      </div>
    );
  }

  // func to create select and options elements
  selectGenre() {
    return (
      <div>
        <label data-testid="select-input-label" htmlFor="selectedGenre">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <this.createSearchTextAndCheckBox />
          <this.selectGenre />
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
