// import { render } from 'enzyme';
// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
    constructor() {
        super()

        this.eventTitle = this.eventTitle.bind(this)

        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
        };
    }
    eventTitle({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }


    render() {
        return (
            <form>
                <label id="title" data-testid="title-input-label">
                    Título
                    <input id="title" type="text" name="name" value={this.state.title} onChange={this.eventTitle} data-testid="title-input" />
                </label>
                <label id="subtitle" data-testid="subtitle-input-label">
                    Subtítulo
                    <input id="subtitle" type="text" name="name" value={this.state.subtitle} onChange={this.eventTitle} data-testid="subtitle-input" />
                </label>
                <label id="image" data-testid="title-input-label">
                    Imagem
                    <input id="image" type="text" name="name" value={this.state.imagePath} onChange={this.eventTitle} data-testid="image-input" />
                </label>
                <label id="sinopse" data-testid="storyline-input-label">
                    Sinopse
                    <textarea id="sinopse" type="text" name="name" value={this.state.storyline} onChange={this.eventTitle} data-testid="storyline-input-label" />
                </label>
                <label id="avaliacao" data-testid="rating-input-label">
                    Avaliação
                    <textarea id="sinopse" type="number" name="name" value={this.state.storyline} onChange={this.eventTitle} data-testid="rating-input-label" />
                </label>
                <label id="genero" data-testid="genre-input-label">
                    Gênero
                <select value="genre" data-testid="genre-input">
                        <option value="action" data-testid="genre-option">Ação</option>
                        <option value="comedy" data-testid="genre-option">Comédia</option>
                        <option value="thriller" data-testid="genre-option">Suspense</option>
                    </select>
                    <button onClick={this.eventTitle} data-testid="send-button">Adicionar filme</button>

                </label>
            </form>
        )
    }

}

export default AddMovie;

