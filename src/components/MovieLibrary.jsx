import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };
  }
  componentWillMount() {
    this.setState(({ movies: this.props.movies }));
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value}, () => {
      const selectedGenreMovies = this.props.movies.filter((movie) => (
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase())
    ));
    this.setState({ movies: selectedGenreMovies });
  })
}

  onSelectedGenreChange({ target }) {
    this.setState(() => ({ selectedGenre: target.value }));
  }

  onBookmarkedChange({ target }) {
    this.setState(() => ({ bookmarkedOnly: target.checked }));
  }

  onClick({ target }) {
    this.setState(() => ({ movies: this.state.movies.push(target) }));
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.defaultProps = { movies: [] };
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
