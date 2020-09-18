import React from 'react';
import PropTypes from 'prop-types';
import details from './add-movie-components/details';
import TextInput from './add-movie-components/TextInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  inputChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput value={title} handleChange={this.inputChange} detailsObj={details.titleObj} />
      </form>
    );
  }
}

export default AddMovie;
