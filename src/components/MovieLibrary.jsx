import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.myOnClick = this.myOnClick.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  myOnClick() {
    console.log('teste');
  }

  render() {

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <SearchBar
          searchText={'text'}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={'true'}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={'Genre'}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />, */}
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.myOnClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.shape.isRequired };

export default MovieLibrary;
