import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.renderFirstInput = this.renderFirstInput.bind(this);
    this.renderSecondInput = this.renderSecondInput.bind(this);
    this.renderThirdInput = this.renderThirdInput.bind(this);
  }


  renderFirstInput() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <label data-testid="text-input-label" htmlFor="text">Inclui o texto:
      <input
        type="text" value={searchText}
        onChange={onSearchTextChange}
        data-testid="text-input" id="text"
      />
      </label>
    );
  }

  renderSecondInput() {
    const {
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">Mostrar somente favoritos
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
          id="checkbox"
        />
      </label>
    );
  }

  renderThirdInput() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select">Filtrar por gênero
        <select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="search-bar-form">

        {this.renderFirstInput()}

        {this.renderSecondInput()}

        {this.renderThirdInput()}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: propTypes.string,
  onSearchTextChange: propTypes.func,
  bookmarkedOnly: propTypes.bool,
  onBookmarkedChange: propTypes.func,
  selectedGenre: propTypes.string,
  onSelectedGenreChange: propTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: '',
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

export default SearchBar;
