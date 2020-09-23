/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, checkbox } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <div className="movie-card-header-check">
            <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
            <input className="movie-card-checkbox" type="checkbox">{checkbox}</input>
          </div>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>

        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.string.isRequired };

export default MovieCard;
