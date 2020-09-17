import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { this.setState({value: event.target.value}); }
  render() {
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="checkbox" />
      </form>
    );
  }
}

export default SearchBar;
