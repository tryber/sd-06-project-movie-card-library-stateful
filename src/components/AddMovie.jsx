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
    this.preparePropsToTitleInput = this.preparePropsToTitleInput.bind(this);
    this.preparePropsToSubtitleInput = this.preparePropsToSubtitleInput.bind(this);
    this.preparePropsToImageInput = this.preparePropsToImageInput.bind(this);
    this.preparePropsToRatingInput = this.preparePropsToRatingInput.bind(this);
    this.preparePropsToGenreInput = this.preparePropsToGenreInput.bind(this);
    this.preparePropsToStorylineInput = this.preparePropsToStorylineInput.bind(this);
    this.preparePropsToButton = this.preparePropsToButton.bind(this);
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

  preparePropsToTitleInput() {
    return ({
      type: 'text',
      name: 'title',
      value: this.state.title,
      handle: this.handleChange,
      inputId: 'title-input',
      labelId: 'label-title-input',
      label: 'Título',
      checked: '',
    });
  }

  preparePropsToSubtitleInput() {
    return ({
      type: 'text',
      name: 'subtitle',
      value: this.state.subtitle,
      handle: this.handleChange,
      inputId: 'subtitle-input',
      labelId: 'label-subtitle-input',
      label: 'Subtítulo',
      checked: '',
    });
  }

  preparePropsToImageInput() {
    return ({
      type: 'text',
      name: 'imagePath',
      value: this.state.imagePath,
      handle: this.handleChange,
      inputId: 'image-input',
      labelId: 'label-image-input',
      label: 'Imagem',
      checked: '',
    });
  }

  preparePropsToRatingInput() {
    return ({
      type: 'number',
      name: 'rating',
      value: this.state.rating,
      handle: this.handleChange,
      inputId: 'rating-input',
      labelId: 'label-rating-input',
      label: 'Avaliação',
      checked: '',
    });
  }

  preparePropsToGenreInput() {
    const optionsToSelect = [
      { label: 'Ação', value: 'action' },
      { label: 'Comédia', value: 'comedy' },
      { label: 'Suspense', value: 'thriller' },
    ];

    return ({
      name: 'genre',
      value: this.state.genre,
      handle: this.handleChange,
      inputId: 'genre-input',
      labelId: 'genre-input-label',
      label: 'Gênero',
      options: optionsToSelect,
    });
  }

  preparePropsToStorylineInput() {
    return ({
      type: 'text',
      name: 'storyline',
      value: this.state.storyline,
      handle: this.handleChange,
      inputId: 'storyline-input',
      labelId: 'storyline-input-label',
      label: 'Sinopse',
    });
  }

  preparePropsToButton() {
    return ({
      value: this.state,
      handle: this.handleOnClick,
      inputId: 'send-button',
      label: 'Adicionar filme',
    });
  }

  render() {
    const objToTitleInput = this.preparePropsToTitleInput();
    const objToSubtitleInput = this.preparePropsToSubtitleInput();
    const objToImageInput = this.preparePropsToImageInput();
    const objToRatingInput = this.preparePropsToRatingInput();
    const objToGenreInput = this.preparePropsToGenreInput();
    const objToStorylineInput = this.preparePropsToStorylineInput();
    const objToButton = this.preparePropsToButton();

    return (
      <form data-testid="add-movie-form">
        <Input objProps={objToTitleInput} />
        <Input objProps={objToSubtitleInput} />
        <Input objProps={objToImageInput} />
        <TextArea objProps={objToStorylineInput} />
        <Input objProps={objToRatingInput} />
        <SelectInput objProps={objToGenreInput} />
        <Button objProps={objToButton} />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.defaultProps = { onClick: '' };
AddMovie.propTypes = { onClick: PropTypes.func };
