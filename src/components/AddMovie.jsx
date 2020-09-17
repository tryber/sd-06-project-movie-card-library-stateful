import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title"> Título
            <input
              data-testid="title-input" type="text" name="title"
              value={this.state.title} onChange={this.handleChange}
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle"> Subtítulo
            <input
              data-testid="subtitle-input" type="text" name="subtitle"
              value={this.state.subtitle} onChange={this.handleChange}
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath"> Imagem
            <input
              data-testid="image-input" type="text" name="imagePath"
              value={this.state.imagePath} onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
