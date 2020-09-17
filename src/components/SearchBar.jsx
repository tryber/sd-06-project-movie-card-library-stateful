import React from 'react';
import propTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Search' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">

        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={this
        .props
        .searchText} onChange={this
        .props
        .onSearchTextChange} data-testid="text-input" 
        />

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input type="checkbox" data-testid="checkbox-input" checked={this
          .props
          .bookmarkedOnly} onChange={this
          .props
          .onBookmarkedChange}
        />

        <label htmlFor="select-option" data-testid="select-input-label">Filtrar por gênero</label>
        <select value={this
          .props
          .selectedGenre} onChange={this
          .props
          .onSelectedGenreChange} data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>

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

export default SearchBar;
