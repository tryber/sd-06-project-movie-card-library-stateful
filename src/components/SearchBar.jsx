import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.GetDropdown = this.GetDropdown.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSelectedGenreChange(event = { target: this.selectedGenre }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  onBookmarkedChange(event = { target: this.bookmarkedOnly }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  onSearchTextChange(event = { target: this.searchText }) {
    const { target } = event;
    this.setState(target.type === 'checkbox'
      ? { [target.name]: target.checked }
      : { [target.name]: target.value });
  }

  GetDropdown() {
    return (
      <label data-testid="select-input-label" htmlFor="dropdown" >
        Filtrar por gênero
        <select
          id="dropdown" data-testid="select-input"
          value={this.props.selectedGenre} onChange={this.onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label >
    );
  }

  render() {
    const { searchText, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search">
          Inclui o texto
          <input
            id="search" data-testid="text-input"
            type="text" name="serachText"
            value={searchText} onChange={this.onSearchTextChange}
          />
        </label>
        <input type="submit" value="Submit" /> <br />
        <label data-testid="checkbox-input-label" htmlFor="favorite-checkbox">
          Mostrar somente favoritos
          <input
            id="favorite-checkbox" data-testid="checkbox-input"
            type="checkbox" name="bookmarkedOnly"
            checked={bookmarkedOnly} onChange={this.onBookmarkedChange}
          />
        </label> <br />
        <this.GetDropdown />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
