import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInputLabel() {
    return (
      <label data-testid="title-input-label" htmlFor="title-input-label">
      Título:
      <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.onChange}
        data-testid="title-input"
        id="title-input-label"
      />
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        <div>{this.renderTitleInputLabel()}</div>
      </form>
    );
  }
}

export default AddMovie;
