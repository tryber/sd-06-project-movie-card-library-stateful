import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  filterWithSearchText() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => (
      movie.title.toUpperCase().includes(searchText.toUpperCase()) ||
      movie.subtitle.toUpperCase().includes(searchText.toUpperCase()) ||
      movie.storyline.toUpperCase().includes(searchText.toUpperCase())
    ));

    if (this.state.searchText === '') {
      this.setState({ movies: this.props.movies });
    } else {
      this.setState({ movies: filteredMovies });
    }
  }

  handleSearchText({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }), this.filterWithSearchText);
  }

  handleBookmarkedChange({ target }) {
    // filter por bookmarked e alterar o state.movies
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  handleGenreChange() {
    // filter por gênero e alterar o state.movies
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.handleSearchText} searchText={this.state.searchText}
          // onBookmarkedChange={handleBookmarkedChange}
          // onSelectedGenreChange={handleGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
