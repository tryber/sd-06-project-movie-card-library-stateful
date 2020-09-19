import React from 'react';
import PropTypes from 'prop-types';

class RatingAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="rating-id" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating-id" data-testid="rating-input" name="rating" value={value}
            onChange={handleChange} type="number"
          />
        </label>
      </div>
    );
  }
}

RatingAM.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingAM;
