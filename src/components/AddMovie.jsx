import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    }
  }
  render() {
    const { onClick } = this.props;
    return (
      <form>
        
      </form>
    );
  }
}
