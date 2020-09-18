import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();

    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  renderInput(type, name, value, event, testId) {
    if (type === 'checkbox') {
      return (
        <input
          type={type}
          name={name}
          onChange={event}
          data-testid={testId}
          checked={this.props.bookmarkedOnly}
        />);
    }

    return <input type={type} name={name} value={value} onChange={event} data-testid={testId} />;
  }

  renderSelect(name, value, event, testId) {
    return (
      <select
        name={name}
        value={value}
        onChange={event}
        data-testid={testId}
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="containsTextFilter" data-testid="text-input-label">
          Inclui o texto:
        </label>
        { this.renderInput('text', 'containsTextFilter', searchText, onSearchTextChange, 'text-input') }
        <label htmlFor="showFavorites" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        { this.renderInput('checkbox', 'showFavorites', false, onBookmarkedChange, 'checkbox-input') }
        <label htmlFor="genre" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        { this.renderSelect('genre', selectedGenre, onSelectedGenreChange, 'select-input') }
      </form>
    );
  }
}

SearchBar.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
