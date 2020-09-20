import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.funcFilter = this.funcFilter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value })
  };
  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked })
  };
  onSelectedGenreChange({ target } ) {
    this.setState({ selectedGenre: target.value })
  };
  onClick() {
    const teste = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.props.movies.push(teste);
  }

  funcFilter(movies) {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return movies.filter(movie => {
      const { title, subtitle, storyline } = movie;
      if(searchText === '') {
        return true;
      } else {
        return (
          (title.indexOf(searchText) > -1 ||
          subtitle.indexOf(searchText) > -1 ||
          storyline.indexOf(searchText) > -1)
        );
      }
    }).filter(movie => {
      const { genre } = movie;
      if(selectedGenre === '') {
        return true;
      } else {
        return genre === selectedGenre;
      }
    }).filter(movie => {
      const { bookmarked } = movie;
      if(bookmarkedOnly === false) {
        return true;
      } else {
        return bookmarked === bookmarkedOnly;
      }
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.funcFilter(movies)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.defaultProps = { movies: {} };
MovieLibrary.propTypes = { movies: PropTypes.string };
