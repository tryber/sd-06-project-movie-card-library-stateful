import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.filmes,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterText = this.filterText.bind(this);
    this.addMovieBtn = this.addMovieBtn.bind(this);
  }

  inputHandler({ target }) {
    this.setState({ searchText: target.value });
  }

  selectHandler({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  checkHandler({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  filterBookmarked(meuArray, bookmarked) {
    if (this.bookmarked) {
      return meuArray.filter((movie) => movie.bookmarked);
    }
    return meuArray;
  }

  filterGenre(meuArray, genre) {
    if (genre !== '') {
      return meuArray.filter((movie) => movie.genre === genre);
    }
    return meuArray;
  }

  filterText(meuArray, text) {
    const aux = text.toLowerCase();
    if (aux !== '') {
      return meuArray.filter((movie) => {
        if (movie.title.toLowerCase().search(aux) > -1) return true;
        if (movie.subtitle.toLowerCase().search(aux) > -1) return true;
        if (movie.storyline.toLowerCase().search(aux) > -1) return true;
        return false;
      });
    }
    return meuArray;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movies = this.state.movies;
    movies = this.filterBookmarked(this.movies, bookmarkedOnly);
    movies = this.filterGenre(this.movies, selectedGenre);
    movies = this.filterText(this.movies, searchText);
    return (
      <section>
        <SearchBar
          procurarTexto={searchText} eventoProcurarTexto={this.inputHandler}
          marcarFavorito={bookmarkedOnly} eventoMarcarFavorito={this.checkHandler}
          selecionarGenero={selectedGenre} eventoSelecionarGenero={this.selectHandler}
        />
        <MovieList filmes={movies} />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = { filmes: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
