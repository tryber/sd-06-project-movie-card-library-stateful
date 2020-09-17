import React, { Component } from 'react';

class AddMovie extends  Component {

  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    const { onClick } = this.props
    return (
      <form action="">
        <label data-testid="title-input-label">
          Título
          <input type="text" value={this.state.title} data-testid="title-input" onChange={this.onClick} />
        </label>
      </form>
    )
  }
}

export default AddMovie;
