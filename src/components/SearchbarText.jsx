import React from 'react';
import propTypes from 'prop-types';

class SearchbarText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        <p>Inclui o texto</p>
        <input id="text-input" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
      </label>
    );
  }
}

SearchbarText.propTypes = { searchText: propTypes.bool.isRequired };
SearchbarText.propTypes = { onSearchTextChange: propTypes.func.isRequired };

export default SearchbarText;
