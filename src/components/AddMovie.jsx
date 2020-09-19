import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.putTitleAndSubtitle = this.putTitleAndSubtitle.bind(this);
    this.addMovie = this.addMovie.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange ({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  putTitleAndSubtitle(inputLabel, label, data, type, id) {
    const { title } = this.state;
    return (
      <label data-testid={inputLabel} htmlFor="movie">
        {label}
        <input
          id={id}
          data-testid={data}
          type={type}
          name={id}
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </label>
    );
  }

  putTextArea(inputLabel, label, data, type, id) {
    const { title } = this.state;
    return (
      <label data-testid={inputLabel} htmlFor="synopsis">
        {label}
        <input
          id={id}
          data-testid={data}
          type={type}
          name={id}
          value={title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </label>
    );
  }

  putRating(inputLabel, label, data, type, id) {
    const { rating } = this.state;
    console.log(rating);
    return (
      <label data-testid={inputLabel} htmlFor="rating">
        {label}
        <input
          id={id}
          data-testid={data}
          type={type}
          name={id}
          value={rating}
          onChange={(event) => this.setState({ rating: event.target.value })}
        />
      </label>
    );
  }

  selectBox(item) {
    const { genre } = this.state;
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select
          id={item}
          data-testid="genre-input"
          value={genre}
          onChange={(event) => this.setState({ genre: event.target.value })}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addMovie(onClick) {
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    return (
      <form>
        {this.putTitleAndSubtitle('title-input-label', 'Título', 'title-input', 'text', 'title')}
        {this.putTitleAndSubtitle('subtitle-input-label', 'Subtítulo', 'subtitle-input', 'text', 'subtitle')}
        {this.putTitleAndSubtitle('image-input-label', 'Imagem', 'image-input', 'text', 'imagePath')}
        {this.putTextArea('storyline-input-label', 'Sinopse', 'storyline-input', 'textArea', 'storyline')}
        {this.putTitleAndSubtitle('rating-input-label', 'Avaliação', 'rating-input', 'number', 'rating')}
        {this.selectBox('genre')}
        <button
          type="button"
          data-testid="send-button"
          onClick={() => this.addMovie(this.props.onClick)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.string.isRequired };

export default AddMovie;
