import React from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends React.Component {
  render() {
    const { title, handlerChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input-text-title">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={title}
          onChange={handlerChange}
          id="input-text-title"
        />
      </label>
    );
  }
}

TitleAddMovie.propTypes ={
  title: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default TitleAddMovie;
