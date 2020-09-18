import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target }) {
    const { name, value } = target;

    this.setState = ({ [name]: value });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input type="text" value={this.state.title} name="title" data-testid="title-input" onChange={this.handleChanges} />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
