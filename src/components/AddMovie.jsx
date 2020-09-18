import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import SelectInput from './SelectInput.jsx';
import TextArea from './TextArea.jsx';
import Button from './Button.jsx';

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
      bookmarked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(() => ({ [name]: value }));
  }

  handleOnClick({ target }) {
    this.props.onClick(target.value);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    }));
  }

  render() {
    const options = [
      { label: 'Ação', value: 'action' },
      { label: 'Comédia', value: 'comedy' },
      { label: 'Suspense', value: 'thriller' },
    ];

    return (
      <form data-testid="add-movie-form">
        <Input type="text" name="title" value={this.state.title} handle={this.handleChange} inputId="title-input" labelText="Título" labelId="title-input-label" checked="" />

        <Input type="text" name="subtitle" value={this.state.subtitle} handle={this.handleChange} inputId="subtitle-input" labelText="Subtítulo" labelId="subtitle-input-label" checked="" />

        <Input type="text" name="imagePath" value={this.state.imagePath} handle={this.handleChange} inputId="image-input" labelText="Imagem" labelId="image-input-label" checked="" />

        <TextArea name="storyline" value={this.state.storyline} handle={this.handleChange} inputTestId="storyline-input" labelText="Sinopse" labelTestId="storyline-input-label" />

        <Input type="number" name="rating" value={this.state.rating} handle={this.handleChange} inputId="rating-input" labelText="Avaliação" labelId="rating-input-label" checked="" />

        <SelectInput name="genre" value={this.state.genre} handle={this.handleChange} inputId="genre-input" labelText="Gênero" labelId="genre-input-label" options={options} />

        <Button value={this.state} handle={this.handleOnClick} inputTestId="send-button" labelText="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.defaultProps = { onClick: '' };
AddMovie.propTypes = { onClick: PropTypes.func };
