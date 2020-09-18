import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };
    this.putTitleAndSubtitle = this.putTitleAndSubtitle.bind(this);
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

  render() {
    return (
      <form>
        {this.putTitleAndSubtitle('title-input-label', 'Título', 'title-input', 'text', 'txtTitle')}
        {this.putTitleAndSubtitle('subtitle-input-label', 'Subtítulo', 'subtitle-input', 'text', 'txtSubtitle')}
        {this.putTitleAndSubtitle('image-input-label', 'Imagem', 'image-input', 'text', 'txtImage')}
        {this.putTextArea('storyline-input-label', 'Sinopse', 'storyline-input', 'textArea', 'txtSynopsis')}
        {this.putTitleAndSubtitle('rating-input-label', 'Avaliação', 'rating-input', 'number', 'txtRating')}
      </form>
    );
  }
}

export default AddMovie;
