import React from 'react';
import PropTypes from 'prop-types';

class TitleInputText extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="subTitle">
        Título
        <input
          id="subTitle"
          data-testid="title-input"
          type="text"
          value={title}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default TitleInputText;

TitleInputText.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
