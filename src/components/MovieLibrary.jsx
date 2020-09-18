import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  // AQUI
  // constructor(props) {
  //   super(props);
  // }

  // onSearchTextChange() {
  //   // AQUI searchText
  //   const newMoviesText = movies.filter(element => element === this.state.value);
  //   movies = newMoviesText;
  // }

  // onBookmarkedChange() {
  //   // bookmarkedOnly
  // }

  // onSelectedGenreChange() {
  //   selectedGenre
  // }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        bookmarkedOnly={bookmarkedOnly}
        onBookmarkedChange={onBookmarkedChange}
        selectedGenre={selectedGenre}
        onSelectedGenreChange={onSelectedGenreChange}
        <AddMovie
         onClick = {() => console.log('hi')}
         />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
