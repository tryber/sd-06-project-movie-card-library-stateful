import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          // placeholder="Type Movie Subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          onChange={this.props.handleOnChange}
          value={this.props.subtitle}
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddMovieSubtitle;
