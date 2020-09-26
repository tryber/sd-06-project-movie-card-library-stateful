import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (<form data-testid="search-bar-form">
      <div>
        <label data-testid="text-input-label" htmlFor="nome">Inclui o texto :
        <input data-testid="text-input" name="nome" type="text"
            value={this.props.searchText} onChange={this.props.onSearchTextChange} /></label>
      </div>
      <div>
        <label data-testid="checkbox-input-label" htmlFor="list">Mostrar somente favoritos &ensp;</label>
        <input data-testid="checkbox-input" name="list" type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
      </div>
      <div>
        <label data-testid="select-input-label" htmlFor="select">Filtrar por gênero
          <select data-testid="select-input" name="select" value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    </form>)
  }
}

export default SearchBar;