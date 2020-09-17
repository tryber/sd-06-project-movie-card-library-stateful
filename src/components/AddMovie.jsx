import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
    
  //   this.handleChange = this.handleChange.bind(this);
    
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   }
  // }

  // handleChange(event) {
  //   const { target } = event;
  //   const { name } = target;
  //   let value = target.type === 'checkbox' ? target.checked : target.value;
    
  //   this.setState({
  //     [name]: value
  //   });
  // }

  render() {
    // const { onClick } = this.props;
    return (
      <form>
        <label data-testid="title-input-label" htmlFor="searchText"> Título
          {/* <input
            data-testid="title-input" type="text" name="searchText"
            value={this.state.title} onChange={this.handleChange}
          /> */}
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
