import React from 'react';
import propTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          <p>Sinopse</p>
          <textarea
            id="storyline"
            data-testid="storyline-input"
            name="storyline"
            value={storyline}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}

Storyline.propTypes = { storyline: propTypes.string.isRequired };
Storyline.propTypes = { handleChange: propTypes.func.isRequired };

export default Storyline;
