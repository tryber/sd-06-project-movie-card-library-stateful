import React from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleState = this.handleState.bind(this);
    this.filteringSearchChange = this.filteringSearchChange.bind(this);
  }

  onClick() {
    console.log('oi');
  }

  handleState(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [name]: value }, () => {
      this.filteringSearchChange();
    });
  }

  filteringSearchChange() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let whichFilterINeed = movies;

    if (bookmarkedOnly) {
      whichFilterINeed = whichFilterINeed.filter((movie) => movie.bookmarked === true);
    } else {
      whichFilterINeed = movies;
    }

    if (selectedGenre) {
      whichFilterINeed = whichFilterINeed.filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText) {
      whichFilterINeed = whichFilterINeed.filter((movie) => movie.title.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.subtitle.toLowerCase()
        .includes(searchText.toLowerCase()) || movie.storyline.toLowerCase()
        .includes(searchText.toLowerCase()));
    }
    this.setState({ movies: whichFilterINeed });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleState}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleState}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleState}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
