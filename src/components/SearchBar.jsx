import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './formComponents/Input';
import CheckBox from './formComponents/CheckBox';
import GenreFilter from './formComponents/Genrefilter';

import '../styles/searchBar.css';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form" className="filter-form">
        <h2>Filtre os filmes</h2>

        <Input
          changeFunc={onSearchTextChange}
          state={searchText}
          text="Inclui o texto"
          name="searchText"
          testDesc="text"
        />

        <div className="filters">

          <CheckBox state={bookmarkedOnly} changeFunc={onBookmarkedChange} />
          <GenreFilter state={selectedGenre} changeFunc={onSelectedGenreChange} />

        </div>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
