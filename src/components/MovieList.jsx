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

// bookmarked: true
// genre: "action"
// imagePath: "images/Kingsglaive_Final_Fantasy_XV.jpg"
// rating: 4.5
// storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal."
// subtitle: "Final Fantasy XV"
// title: "Kingsglaive"
