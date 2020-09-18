import React from 'react';
import PropTypes from 'prop-types';

class SelectSB extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="input-select" data-testid="select-input-label">Filtrar por gênero
          <select
            data-testid="select-input"
            value={value} onChange={onChange}
          >
            <option data-testid="select-option" selected value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectSB.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectSB;
