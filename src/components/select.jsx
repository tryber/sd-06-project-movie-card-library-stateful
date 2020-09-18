import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selects extends Component {
  render() {
    const {
      labTitle, selectName, selectValue,
      optValue, optTitle, change,
    } = this.props;

    return (
      <fieldset>
        <label
          data-testid="genre-input-label" htmlFor="genre-input"
        >
          {labTitle}
        </label>
        <select
          data-testid="genre-input" name={selectName} value={selectValue} onChange={change}
        >
          <option data-testid="genre-option" value={optValue[0]} >{optTitle[0]}</option>
          <option data-testid="genre-option" value={optValue[1]} >{optTitle[1]}</option>
          <option data-testid="genre-option" value={optValue[2]} >{optTitle[2]}</option>
        </select>
      </fieldset>
    );
  }
}

Selects.propTypes = {
  labTitle: PropTypes.string,
  selectName: PropTypes.string,
  selectValue: PropTypes.string,
  optValue: PropTypes.array,
  optTitle: PropTypes.array,
  change: PropTypes.func,
};

Selects.defaultProps = {
  labTitle: '',
  selectName: '',
  selectValue: '',
  optValue: [],
  optTitle: [],
  change: '',
};

export default Selects;
