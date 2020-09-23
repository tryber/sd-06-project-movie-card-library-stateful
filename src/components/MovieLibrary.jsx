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
    this.onClick = this.onClick.bind(this);
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
    this.setState({ searchText: target.value }, () => {
      const selectedGenreMovies = this.props.movies.filter((movie) => (
        movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase())
    ));
      this.setState({ movies: selectedGenreMovies });
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
      movies: value === null ? this.props.movies :
      this.props.movies.filter((movie) => movie.genre === value),
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarked: checked,
      movies: checked === null ? this.props.movies :
      this.props.movies.filter((movie) => movie.bookmarked),
    });
  }

  onClick(movie) {
    this.setState(() => ({ movies: this.state.movies.concat(movie) }));
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
MovieLibrary.defaultProps = { movies: [] };
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
export default MovieLibrary;
