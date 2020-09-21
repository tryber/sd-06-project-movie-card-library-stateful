import React from 'react';
import Proptypes, { object } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const { searchText } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.filter((movie) => Object.values(movie).join('\n')
          .toLowerCase().includes(searchText.toLowerCase()))
          .map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: Proptypes.arrayOf(object).isRequired,
  searchText: Proptypes.string,
};

MovieList.defaultProps = { searchText: '' };

export default MovieList;
