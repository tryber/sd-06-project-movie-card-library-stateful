import React from 'react';
import propTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';


class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    // estado inicial do pai (MovieLibrary) para o filho (SearchBar) receber via props
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickAddMovie = this.clickAddMovie.bind(this);
  }

  // essa função vai do pai (MovieLibrary) para o filho (SearchBar), via props, para pegar o valor
  // dos inputs de texto e o check box
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.choosingMyMovies(); });
  }

  // essa função vai filtrar os filmes escolhidos, de acordo com as opções de
  // favoitos(bookmarkedOnly) palavra-chave(searchText) ou gênero(selectedGenre)
  choosingMyMovies() {
    let myMovies = this.props.movies;

    if (this.state.bookmarkedOnly) {
      myMovies = myMovies.filter((movie) => movie.bookmarked === true);
    }

    if (this.state.selectedGenre !== '') {
      myMovies = myMovies.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (this.state.searchText !== '') {
      myMovies = myMovies.filter((movie) => movie.title.includes(this.state.searchText) ||
                                movie.subtitle.includes(this.state.searchText) ||
                                movie.storyline.includes(this.state.searchText),
      );
    }

    // atribui ao estado de movies a definição dos filmes filtrados (ou não) em
    // choosingMyMovie();
    this.setState({ movies: myMovies });
  }

  clickAddMovie(newAddMovie) {
    const { movies } = this.props;
    this.setState({ movies: movies.concat(newAddMovie) });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.clickAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
