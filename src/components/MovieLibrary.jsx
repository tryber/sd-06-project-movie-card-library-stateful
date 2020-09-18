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
    const inputValue = target.value.toLowerCase();
    const movieTitle = this.props.movies.filter((value) =>
      value.title.toLowerCase() === inputValue);
    if (target.value === '' || movieTitle.length === 0) this.setState({ movies: this.props.movies });
    else this.setState({ movies: movieTitle });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
    const gengerValue = target.value;
    const movieGender = this.props.movies.filter((value) => value.genre === gengerValue);
    if (movieGender.length === 0) this.setState({ movies: this.props.movies });
    else this.setState({ movies: movieGender });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
    const favorites = target.checked;
    const favMovies = this.props.movies.filter((value) => value.bookmarked === true);
    if (!favorites) this.setState({ movies: this.props.movies });
    else this.setState({ movies: favMovies });
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}
// ✕ Será validado se a barra de buscas filtra os filmes por titulo (90ms)
// ✕ Será validado se a barra de buscas filtra os filmes por subtítulo (125ms)
// ✕ Será validado se a barra de buscas filtra os filmes por sinopse (51ms)
// ✕ Será validado se é possível adicionar um novo filme a lista de filmes (263ms)

MovieLibrary.propTypes = { movies: PropTypes.element.isRequired };

export default MovieLibrary;
