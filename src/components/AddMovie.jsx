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
      genre: 'action',
    };
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">

        <label data-testid="title-input-label" htmlFor="input-text-addMovie">
          Título
          <input data-testid="title-input" value={title} id="input-text-addMovie" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
