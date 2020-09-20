import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // bookmarked, genre, imagePath, rating, storyline, subtitle, title
    const { filmes } = this.props;
    return (
      <main className="movie-list">
        {filmes.map((item) =>
          <MovieCard
            key={item.title}
            filmes={item}
          />,
        )}
      </main>
    );
  }
}

MovieList.propTypes = { filmes: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
