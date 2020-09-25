import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderInputText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="text-input-label" className="form-element">
        Inclui o texto:
      <input
        type="text"
        name="searchText"
        data-testid="text-input"
        defaultValue={searchText}
        onChange={onSearchTextChange}
        className="form-element"
      />
      </label>
    );
  }

  renderCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label
        htmlFor="checkbox-input"
        data-testid="checkbox-input-label"
        className="form-element"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          defaultChecked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          className="form-element"
        />
      </label>
    );
  }

  renderSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input" data-testid="select-input-label" className="form-element"
      >
        Filtrar por gênero
        <select
          data-testid="select-input"
          defaultValue={selectedGenre}
          onChange={onSelectedGenreChange}
          className="form-element"
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
        <form data-testid="search-bar-form" className="movie-form">
          {this.renderInputText()}
          {this.renderCheckBox()}
          {this.renderSelect()}
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

export default SearchBar;
