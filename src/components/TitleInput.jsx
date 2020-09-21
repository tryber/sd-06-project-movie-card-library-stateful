import React from 'react';
import propTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        <p>Título</p>
        <input
          id="title"
          data-testid="title-input"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </label>
    );
  }
}

TitleInput.propTypes = { title: propTypes.string.isRequired };
TitleInput.propTypes = { handleChange: propTypes.func.isRequired };

export default TitleInput;
