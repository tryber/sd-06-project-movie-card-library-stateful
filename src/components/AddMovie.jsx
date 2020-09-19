import React from 'react';
import '../App.css';
import Labels from './Labels.jsx';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.entradas = this.entradas.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  entradas(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  ComboBox() {
    return (
      <select
        value={this.state.genre} data-testid="genre-input" name="genre"
        onChange={this.entradas} className="tipoInput"
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  LocalDasEntradas() {
    return (
      <div className="inputs">
        <input
          value={this.state.title} data-testid="title-input" name="title"
          onChange={this.entradas} type="text" id="title" className="tipoInput"
        /><br />
        <input
          value={this.state.subtitle} data-testid="subtitle-input" name="subtitle"
          onChange={this.entradas} type="text" id="subtitle" className="tipoInput"
        /><br />
        <input
          value={this.state.imagePath} data-testid="image-input" name="imagePath"
          onChange={this.entradas} type="text" id="img" className="tipoInput"
        /><br />
        <textarea
          value={this.state.storyline} data-testid="storyline-input" name="storyline"
          onChange={this.entradas} id="sinopse" className="tipoInput"
        /><br />
        <input
          value={this.state.rating} data-testid="rating-input" name="rating"
          onChange={this.entradas} type="number" id="aval" className="tipoInput"
        /><br />
        { this.ComboBox() }
      </div>
    );
  }

  render() {
    const onClick = this.props;
    return (
      <form className="addMovie" data-testid="add-movie-form">
        <Labels />
        { this.LocalDasEntradas() }
        <button className="btnAdicionar" data-testid="send-button" onClick={onClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
