import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.cheked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label"> Inclui o texto
          <input type="text" name="searchText" value={this.state.searchText} onChange={this.handleChange} data-testid="text-input" />
        </label>
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label"> Mostrar somente favoritos
          <input type="checkbox" name="bookmarkedOnly" value={this.state.bookmarkedOnly} onChange={this.handleChange} data-testid="checkbox-input" />
        </label>
        <label htmlFor="selectedGenre" data-testid="select-input-label"> Filtrar por gênero
          <select name="selectedGenre" value={this.state.selectedGenre} onChange={this.handleChange} data-testid="select-input" >
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
