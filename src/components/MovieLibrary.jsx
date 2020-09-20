import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event = { target: this.props.checked }) {
    const { target } = event;
    this.setState((past) => ({
      movies: [...past, {
        subtitle: target.subtitle,
        title: target.title,
        imagePath: target.imagePath,
        storyline: target.storyline,
        rating: target.rating,
        genre: target.genre,
      },
      ],
    }),
    );
  }

  render() {
    const { onClick, movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={onClick} movieState={this.state} />
      </div>
    );
  }


  /* async insertMovie() {
    await recordData()
      .then(resetState());
  } */
}

MovieLibrary.propTypes = {
  checked: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  /* subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired, */
};

export default MovieLibrary;
