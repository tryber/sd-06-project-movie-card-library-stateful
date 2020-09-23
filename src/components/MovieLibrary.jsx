import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    }, () => {
      const searchText = this.state.searchText.toLowerCase();
      const filteredMovies = this.props.movies
        .filter(movie => (
          movie.title.toLowerCase().includes(searchText) ||
          movie.subtitle.toLowerCase().includes(searchText) ||
          movie.storyline.toLowerCase().includes(searchText)
        ));
      this.setState({ movies: filteredMovies });
    });
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => {
      if (this.state.bookmarkedOnly === true) {
        const bookmarkedMovies = this.props.movies
          .filter(movie => movie.bookmarked === true);
        this.setState({ movies: bookmarkedMovies });
      } else {
        this.setState({ movies: this.props.movies })
      }
    });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => {
      if (this.state.selectedGenre === '') {
        this.setState({ movies: this.props.movies });
      } else {
        const moviesByGenre = this.props.movies
          .filter(movie => movie.genre === this.state.selectedGenre);
        this.setState({ movies: moviesByGenre });
      }
    });
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie]})
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick}/>
        
        
      </div>
    );
  }
}

export default MovieLibrary;
