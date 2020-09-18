import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends React.Component {
  render() {
    const { subtitle, handlerChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input-text-subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={subtitle}
          onChange={handlerChange}
          id="input-text-subtitle"
        />
      </label>
    );
  }
}

SubtitleAddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default SubtitleAddMovie;
