// implement AddMovie component here
import React, {Component} from 'react'

class AddMovie extends Component {
    constructor () {
        super ();
        this.state = {
            subtitle:'',
            title:'',
            imagePath:'',
            storyLine:'',
            rating:0,
            genre:'action'
        }

    }
    handleChanges = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    
    }
    handleClick = () => {
        const {onClick} = this.props
        onClick(this.state);
        this.setState({
            subtitle:'',
            title:'',
            imagePath:'',
            storyLine:'',
            rating:0,
            genre:'action'
        })
    }
    render() {
        return (
            <form data-testid="add-movie-form">
                <label htmlFor="title" data-testid="title-input-label">Título
                <input type="text" id="title" name="title" value={this.state.title} data-testid="title-input" onChange={this.handleChanges}></input></label>
                <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
                <input type="text" id="subtitle" name="subtitle" data-testid="subtitle-input" onChange={(this.handleChanges)} value={this.state.subtitle}></input></label>
                <label  htmlFor="image" data-testid="image-input-label">Imagem
                <input type="text" id="image" name="imagePath" data-testid="image-input" value={this.state.imagePath} onChange={this.handleChanges}></input></label>
                <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse
                <textarea  type="text"id="sinopse" name="storyLine" data-testid="storyline-input" value={this.state.storyLine} onChange={this.handleChanges}></textarea></label>
                <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação
                <input type="number" id="avaliacao" name="rating" data-testid="rating-input"value={this.state.rating} onChange={this.handleChanges}></input></label>
                <label htmlFor="genero" data-testid="genre-input-label">Gênero
                <select id="genero" data-testid="genre-input" name="genre" value={this.state.genre} onChange={this.handleChanges}>
                    <option value="action" data-testid="genre-option">Ação</option>
                    <option value="comedy" data-testid="genre-option">Comédia</option>
                    <option value="thriller" data-testid="genre-option">Suspense</option>
                </select></label>
                <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
            </form>
        )
    }
}
export default AddMovie;