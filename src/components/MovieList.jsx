import PropTypes from 'prop-types';
import React from 'react';

import MovieCard from './MovieCard';

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

MovieList.defaultProps = { movies: [{}, {}] };

MovieList.propTypes = { movies: PropTypes.element };

export default MovieList;
