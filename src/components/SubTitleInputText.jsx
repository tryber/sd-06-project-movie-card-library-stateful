import React from 'react';
import PropTypes from 'prop-types';

class SubTitleInputText extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subTitle">
        SubTitulo
        <input
          id="subTitle"
          data-testid="subtitle-input"
          type="text"
          value={subtitle}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default SubTitleInputText;

SubTitleInputText.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
