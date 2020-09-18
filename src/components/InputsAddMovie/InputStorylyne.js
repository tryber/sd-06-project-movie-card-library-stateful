import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends Component {
  render() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={this.props.storyline}
          data-testid="storyline-input"
          onChange={this.props.handleInputs}
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default InputStoryline;
