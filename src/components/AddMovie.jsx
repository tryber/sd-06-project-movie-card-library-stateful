// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action',
          }
        }

        handleChange({target}) {
            const {name, value} = target
            this.setState({ [name]: value})
          }

    render() {
        const { onClick } = this.props
        return (
            <form>

                <label for="title-input" data-testid="title-input-label">Título</label>
                <intup type="text" value={this.state.title} data-testid="title-input" onChange={this.handleChange} />

                <label for="title-input" data-testid="subtitle-input-label">Subtítulo</label>
                <intup type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleChange} />

            </form>
        )
    }
}

export default AddMovie;