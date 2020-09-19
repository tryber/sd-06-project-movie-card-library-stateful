import React from 'react';
import PropTypes from 'prop-types';

class TextAreaAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="textarea-id" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textarea-id" data-testid="storyline-input" name="storyline"
            value={value} onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

TextAreaAM.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextAreaAM;
