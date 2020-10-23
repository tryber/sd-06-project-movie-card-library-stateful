import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // genre: 'action',
      // imagePath: '',
      // rating: 0,
      // storyline: '',
      // subtitle: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            data-testid="title-input"
            name="title"
            onChange={this.handleChange}
            type="text"
            value={title}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="text-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            onChange={this.handleChange}
            type="text"
            value={subtitle}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
