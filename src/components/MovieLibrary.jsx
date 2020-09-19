import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    }
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    // this.filterGenre = this.filterGenre.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.filterText = this.filterText.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // filterGenre() {
  //   const { movies } = this.props;
  //   const { selectedGenre } = this.state;
  //   const newMovies = (selectedGenre === '') ? movies : movies.filter(movie => movie.genre === selectedGenre);
    
  //   this.setState({ movies: newMovies });
  // }

  handleSelectedGenre(event) {
    const genre = event.target.value;
    this.setState({ selectedGenre: genre }, () => {
      const { movies } = this.props;
      const { selectedGenre } = this.state;
      const newMovies = (selectedGenre === '') ?
        movies :
        movies.filter(movie => movie.genre === selectedGenre);
      this.setState({ movies: newMovies });
    });
  }

  filterText() {
    const { movies } = this.props;
    const { searchText } = this.state;
    const newMovies = movies.filter((movie) => {
      return(
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText)
      )
    });
    this.setState({ movies: newMovies });
  }

  handleSearchInput({ target }) {
    const { value } = target;
    this.setState({ searchText: value}, this.filterText);
  }

  filterFavorites() {
    const { movies } = this.props;
    const newMovies = (this.state.bookmarkedOnly === true) ?
      movies.filter(movie => movie.bookmarked === this.state.bookmarkedOnly) :
      movies;
    this.setState({ movies: newMovies });
  }

  handleFavorites({ target }) {
    const favorito = target.checked;
    if (favorito) {
      this.setState({ bookmarkedOnly: true }, this.filterFavorites)
    } else {
      this.setState({ bookmarkedOnly: false }, this.filterFavorites)
    }
  }

  handleClick(obj) {
    const { subtitle, title, imagePath, storyline, rating, genre } = obj;
    const { movies } = this.state;
    const newMovie = { 
      subtitle: subtitle,
      title: title,
      imagePath: imagePath,
      storyline: storyline,
      rating: rating,
      genre: genre,  
    }    
    this.setState({ movies: movies.concat(newMovie) })
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleSelectedGenre}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleFavorites}
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchInput}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleClick}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieLibrary;
