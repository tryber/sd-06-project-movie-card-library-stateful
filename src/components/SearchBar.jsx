import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Search' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  onBookmarkedChange(event) {

  }

  render() {
    return (
      <form>

        <label data-testid="text-input-label">Inclui o texto:</label>
        <input type="text" value={this.props.searchText} onChange={this.handleChange} data-testid="text-input"/>

        <label data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input type="checkbox" data-testid="checkbox-input" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />

        <label data-testid="select-input-label">Filtrar por gênero</label>
        <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} data-testid="select-input">
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>

      </form>
    );
  }
}

export default SearchBar;
