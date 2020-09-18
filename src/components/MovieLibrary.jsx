// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    let { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked })
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value })
  }

  onClick() {
    console.log('oi');
  }

  filterMovies() {
    // if (bookmarkedOnly) {
    //   movies.filter((movie) => movie.)
    // }
    // if (this.state.searchText !== '') {
      
    // }
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies}/>
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(PropTypes.object)),
};

export default MovieLibrary;
