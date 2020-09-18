import React from 'react';
import PropTypes from 'prop-types';

class StorylineAddMovie extends React.Component {
  render() {
    const { storyline, handlerChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input-textarea">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={storyline}
          onChange={handlerChange}
          id="input-textarea"
        />
      </label>
    );
  }
}

StorylineAddMovie.propTypes = {
  storyline: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default StorylineAddMovie;
