// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  SearchText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <input
        data-testid="text-input" type="text" value={searchText}
        onChange={onSearchTextChange}
      />
    );
  }

  CheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <input
        data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      />
    );
  }

  SelectGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <select
        data-testid="select-input" value={selectedGenre} onChange={onSelectedGenreChange}
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    );
  }

  render() {
    return (
      <div className="search-bar">
        <form className="form" data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
            Inclui o texto:
        </label>
          {this.SearchText()}
          <label data-testid="checkbox-input-label" htmlFor="check-input">
            Mostrar somente favoritos
        </label>
          {this.CheckBox()}
          <label data-testid="select-input-label" htmlFor="select-input">
            Filtrar por gênero
        </label>
          {this.SelectGenre()}
        </form>
      </div>
    );
  }
}

function getDefaulProps() {
  return {
    onSearchTextChange: this.onSearchTextChange.bind(this),
    onBookmarkedChange: this.onBookmarkedChange.bind(this),
    onSelectedGenreChange: this.onSelectedGenreChange.bind(this),
  };
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: getDefaulProps,
  bookmarkedOnly: false,
  onBookmarkedChange: getDefaulProps,
  selectedGenre: '',
  onSelectedGenreChange: getDefaulProps,
};

export default SearchBar;
