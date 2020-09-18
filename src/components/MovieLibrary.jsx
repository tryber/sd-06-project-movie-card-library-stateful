// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default MovieLibrary;
