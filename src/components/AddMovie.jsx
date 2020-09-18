import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input type="text" name="" id="title-input" data-testid="title-input" />

        </form>
      </div>
    );
  }
}

export default AddMovie;
