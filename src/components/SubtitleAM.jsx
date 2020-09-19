import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitle-id" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-id" data-testid="subtitle-input" name="subtitle"
            value={value} onChange={handleChange} type="text"
          />
        </label>
      </div>
    );
  }
}

SubtitleAM.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SubtitleAM;
