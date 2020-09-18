import React from 'react';
import PropTypes from 'prop-types'; 
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import movies from '../data'

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
    this.handleChanges = this.handleChanges.bind(this);
    this.isbookMarked = this.isbookMarked.bind(this);
    this.bookMarkedFilter = this.bookMarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  bookMarkedFilter({ target }) {
    const { name } = target;
    const value = target.checked;
    const { bookmarkedOnly } = this.state;
    
    this.setState({ [name]: value });

    if (bookmarkedOnly !== true) {
      this.isbookMarked();
    } else {
      this.setState({ movies: movies });
    }
    
  }

  genreFilter({ target: { value } }) {
    const {movies} = this.state;
    this.setState(({ selectedGenre: value }), () => {
      if (this.selectedGenre !== ''){
        this.setState({
          movies: movies.filter((movie) => movie.genre === this.state.selectedGenre)
              .map((movie) => movie)
        });
      } else {
        this.setState({ movies: this.state.movies });
      }
    });  
  }

  

  isbookMarked() {
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.bookmarked === true)
          .map((movie) => movie)
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChanges}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookMarkedFilter}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.genreFilter}
        />
        <AddMovie />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.PropTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
