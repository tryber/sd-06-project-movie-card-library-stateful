import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.renderTitleInput = this.renderTitleInput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    return (
      this.setState = { [name]: value }
    );
  }

  renderTitleInput() {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          name="title"
          onChange={this.handleChange}
          type="text"
          value={this.state.title}
        />
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">

      </form>
    );
  }

}

export default AddMovie;
