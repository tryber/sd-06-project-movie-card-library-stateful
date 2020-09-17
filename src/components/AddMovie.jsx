import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { handleChange} = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">Título
        <input
          data-testid="title-input"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        </label>
      </form>
    );
  }
}
AddMovie.propTypes = { handleChange: PropTypes.func.isRequired };
export default AddMovie;
