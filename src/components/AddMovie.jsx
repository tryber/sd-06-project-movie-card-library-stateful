import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" />
        </label>
        <label data-testid="subtitle-input-label">
          <input data-testid="subtitle-input" />
        </label>
        <label data-testid="image-input-label">
          <input data-testid="image-input" />
        </label>
        <label data-testid="storyline-input-label">
          <textarea data-testid="storyline-input" />
        </label>
        <label data-testid="rating-input-label">
          <textarea data-testid="rating-input" />
        </label>
        <label data-testid="genre-input-label">
          <select>
            <textarea data-testid="genre-input" />
            <option data-testid="genre-option" value=""></option>
            <option data-testid="genre-option" value=""></option>
            <option data-testid="genre-option" value=""></option>
          </select>
        </label>
        <button data-testid="send-button"></button>
      </form>
    );
  }
}

export default AddMovie;
