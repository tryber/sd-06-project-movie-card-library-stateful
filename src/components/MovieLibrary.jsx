import PropTypes from 'prop-types';
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(state) {
    console.log(this);
    console.log(state);
    console.log('peguei o this do AddMovie');
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
// ✕ Será validado se a barra de buscas filtra os filmes por titulo (71ms)
// ✕ Será validado se a barra de buscas filtra os filmes por subtítulo (123ms)
// ✕ Será validado se a barra de buscas filtra os filmes por sinopse (44ms)
// ✓ Será validado se a lista de filmes é renderizada sem filtragens se a barra de
//  buscar estiver vazia (19ms)
// ✕ Será validado que é possivel filtrar por favoritos (30ms)
// ✕ Será validado que é possivel filtrar por categoria (34ms)
// Verifica se o componente <MovieLibrary /> renderiza o componente <AddMovie />
// ✓ Será validado se o componente `AddMovie` é renderizado com sucesso (21ms)
// ✕ Será validado se é possível adicionar um novo filme a lista de filmes (205ms)

MovieLibrary.propTypes = { movies: PropTypes.element.isRequired };

export default MovieLibrary;
