import React from 'react';
import propTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          <p>Subtítulo</p>
          <input
            id="subtitle"
            data-testid="subtitle-input"
            name="subtitle"
            value={subtitle}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = { subtitle: propTypes.string.isRequired };
SubtitleInput.propTypes = { handleChange: propTypes.func.isRequired };

export default SubtitleInput;