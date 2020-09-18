// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      gender: 'action',
    };
  }
  render() {
    return (
      <form
        data-testid="add-movie-form"
      >
        <input type="text" />
      </form>
    );
  }
}

export default AddMovie;
