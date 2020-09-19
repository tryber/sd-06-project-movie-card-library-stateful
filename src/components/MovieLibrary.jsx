import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.AddMovieList = this.AddMovieList.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleTextChange({ target }) {
    this.setState(
      { searchText: target.value },
      () => {
        const filtered = this.state.movies.filter((el) =>
          el.title.toLowerCase().includes(this.state.searchText.toLowerCase())
          || el.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase())
          || el.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()));
        if (this.state.searchText.trim() !== '') this.setState({ movies: filtered });
        else if (this.state.selectedGenre !== '') {
          const filteredGenre = this.props.movies
            .filter((el) => el.genre === this.state.selectedGenre);
          this.setState({ movies: filteredGenre });
        } else {
          this.setState({ movies: this.props.movies });
        }
      });
  }

  handleBookmarkedChange() {
    if (this.state.bookmarkedOnly === false) {
      this.setState(({ bookmarkedOnly: true }));
      const filtered = this.state.movies
        .filter((el) => el.bookmarked === true);
      this.setState(({ movies: filtered }));
    } else {
      this.setState((
        {
          bookmarkedOnly: false,
          movies: this.props.movies,
        }));
    }
  }

  handleGenreChange({ target }) {
    const genre = target.value;
    this.setState(({ selectedGenre: genre, movies: this.props.movies }), () => {
      if (this.state.selectedGenre !== '') {
        const filtered = this.state.movies
          .filter((el) => el.genre === this.state.selectedGenre);
        this.setState(({ movies: filtered }));
      }
    });
  }

  AddMovieList({ title, subtitle, imagePath, storyline, rating, genre }) {
    const data = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    };
    this.setState((last) => ({ movies: [...last.movies, data] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie
          onClick={this.AddMovieList}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

MovieLibrary.defaultProps = { movies: '' };

export default MovieLibrary;
