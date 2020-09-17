import React, {Component} from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    }
  }
  render() {
    
    return(
      <form data-testid="title-input-label">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input type="text" id="title" value={this.state.title} data-test-id="title-input"
        onChange={(event) => {this.setState(({title: event.target.value}))}}/>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input type="text" id="subtitle" value={this.state.subtitle} data-test-id="subtitle-input"
        onChange={(event) => {this.setState(({subtitle: event.target.value}))}}/>
        
        <label htmlFor="image" data-testid="image-input-label">Imagem</label>
        <input type="text" id="image" value={this.state.imagePath} data-test-id="image-input"
        onChange={(event) => {this.setState(({imagePath: event.target.value}))}}/>
        
        <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse</label>
        <textarea id="sinopse" value={this.state.storyline} data-test-id="storyline-input"
        onChange={(event) => {this.setState(({storyline: event.target.value}))}}/>
        
        <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
        <input type="number" id="rating" value={this.state.rating} data-test-id="rating-input"
        onChange={(event) => {this.setState(({rating: event.target.value}))}}/>
        
        <label htmlFor="genres" data-testid="genre-input-label">Gênero</label>
        <select id="genres" value={this.state.genre} data-test-id="genre-input"
        onChange={(event) => {this.setState(({genre: event.target.value}))}}>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>


        <button data-testid="send-button" 
        onClick={() => {
          this.props.onClick;
          this.setState((
            {
              subtitle: "",
              title: "",
              imagePath: "",
              storyline: "",
              rating: 0,
              genre: "action"}
          ));
        }}
        >Adicionar filme</button>
        
      </form>
    )
  }
}

export default AddMovie;