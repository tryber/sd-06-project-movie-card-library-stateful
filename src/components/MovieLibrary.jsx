import React from 'react';
import PropTypes from 'prop-types';
// import AddMovie from './AddMovie';
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
    // this.addMovieBtn = this.addMovieBtn.bind(this);
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

  filterBookmarked(array, bookmarked) {
    if (bookmarked) {
      return array.filter((movie) => movie.bookmarked);
    }
    return array;
  }

  filterGenre(array, genre) {
    if (genre !== '') {
      return array.filter((movie) => movie.genre === genre);
    }
    return array;
  }

  filterText(array, text) {
    const lowText = text.toLowerCase();
    if (lowText !== '') {
      return array.filter((movie) => {
        if (movie.title.toLowerCase().search(lowText) > -1) return true;
        if (movie.subtitle.toLowerCase().search(lowText) > -1) return true;
        if (movie.storyline.toLowerCase().search(lowText) > -1) return true;
        return false;
      });
    }
    return array;
  }

  // addMovieBtn(data) {
  //   const newMovie = {
  //     title: data.title,
  //     subtitle: data.subtitle,
  //     storyline: data.storyline,
  //     rating: data.rating,
  //     imagePath: data.imagePath,
  //     bookmarked: false,
  //     genre: data.genre,
  //   };
  //   this.setState((prevState) => ({ movies: [...prevState.movies, newMovie] }));
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movies = this.state.movies;
    movies = this.filterBookmarked(movies, bookmarkedOnly);
    movies = this.filterGenre(movies, selectedGenre);
    movies = this.filterText(movies, searchText);
    return (
      <section>
        <SearchBar
          procurarTexto={searchText} eventoProcurarTexto={this.inputHandler}
          marcarFavorito={bookmarkedOnly} eventoMarcarFavorito={this.checkHandler}
          selecionarGenero={selectedGenre} eventoSelecionarGenero={this.selectHandler}
        />
        <MovieList filmes={movies} />
        {/* <AddMovie onClick={this.addMovieBtn} /> */}
      </section>
    );
  }
}

MovieLibrary.propTypes = { filmes: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;