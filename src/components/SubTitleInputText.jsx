import React from 'react';
import PropTypes from 'prop-types';

class SubTitleInputText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          type="text"
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default SubTitleInputText;

SubTitleInputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
