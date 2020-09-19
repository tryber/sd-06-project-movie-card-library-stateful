import React from 'react';
// import movies from '../data';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';


class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
