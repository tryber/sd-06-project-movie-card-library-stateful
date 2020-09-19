import React from 'react';
import PropTypes from 'prop-types';

class TitleAM extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title-id" data-testid="title-input-label">Título</label>
        <input
          id="title-id" data-testid="title-input" name="title" value={value}
          onChange={handleChange} type="text"
        />
      </div>
    );
  }
}

TitleAM.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TitleAM;
