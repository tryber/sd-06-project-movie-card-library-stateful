import React from 'react';
import AddMovie from './AddMovie';
// import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {

  onSelectedGenreChange({ target }) {
    this.setState({});
  }
  render() {
    // const movie = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

