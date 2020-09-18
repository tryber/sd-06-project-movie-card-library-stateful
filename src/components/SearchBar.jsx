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
    const { bookMarkedOnly, onBookMarkedChange } = this.props;
    return (
      <input
        data-testid="checkbox-input" type="checkbox" checked={bookMarkedOnly}
        onChange={onBookMarkedChange}
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

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookMarkedOnly: PropTypes.bool,
  onBookMarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: undefined,
  bookMarkedOnly: false,
  onBookMarkedChange: undefined,
  selectedGenre: '',
  onSelectedGenreChange: undefined,
};

export default SearchBar;
