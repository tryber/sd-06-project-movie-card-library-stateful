import React from 'react';

class CheckboxSearchBar extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          id="checkbox-input"
          type="checkbox"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }
}

export default CheckboxSearchBar;
