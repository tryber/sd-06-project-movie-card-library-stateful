import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value }, () => {
      this.filterSearchTextChange();
    });
  }

  filterSearchTextChange() {
    const { searchText } = this.state;
    const { movies } = this.props;
    const filterMovies = movies
      .filter(({ title, subtitle, storyline }) => title
        .toLowerCase().includes((searchText.toLowerCase())
    || subtitle.toLowerCase().includes(searchText.toLowerCase())
    || storyline.toLowerCase().includes(searchText.toLowerCase())));
    this.setState({ movies: filterMovies });
  }

  render() {
    const { movies, searchText } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
        />
        <MovieList
          movies={movies}
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.string.isRequired };
