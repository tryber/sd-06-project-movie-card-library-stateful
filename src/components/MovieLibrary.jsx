import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {

  onSelectedGenreChange({ target }) {
    this.setState({});
  }
  render() {
    const movie = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

function defProp() {
  return {
    onSearchTextChange: this.onSearchTextChange.bind(this),
    onBookmarkedChange: this.onBookmarkedChange.bind(this),
    onSelectedGenreChange: this.onSelectedGenreChange.bind(this),
  };
}

MovieLibrary.defaultProps = {
  searchText: '',
  onSearchTextChange: defProp,
  bookmarkedOnly: false,
  onBookmarkedChange: defProp,
  selectedGenre: '',
  onSelectedGenreChange: defProp,
};


export default MovieLibrary;



