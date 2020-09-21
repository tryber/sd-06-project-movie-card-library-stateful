import React from 'react';
import PropTypes from 'prop-types';

class NewRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          name="rating"
          id="rating"
          type="number"
          data-testid="rating-input"
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default NewRating;

NewRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
