import React from 'react';
// import PropType from 'prop-types';

class SearchBar extends React.Component {
  // constructor() {
  //   super()
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  //   this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  //   this.state = {
  //     searchText: '',
  //     bookMarkedOnly: false,
  //     selectedGenre: '',
  //   };
  // }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form" className="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input type="text" value={searchText} onChange={this.props.onSearchTextChange} data-testid="text-input" />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input checked="bookMarkedOnly" type="checkbox" className="text-input" onChange={this.props.onBookmarkedChange} data-testid="checkbox-input" value={bookMarkedOnly} />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero:
          <select data-testid="select-input" onChange={this.props.onSelectedGenreChange} value={selectedGenre}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SearchBar;