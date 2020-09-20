import React from 'react';
import PropTypes from 'prop-types';

class TitleInputText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          id="title"
          data-testid="title-input"
          type="text"
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default TitleInputText;

TitleInputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
