// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   // bookmarked: true,
  //   };
  // }

  render() {
    // const { onClick } = this.props;
    // onClick(this.state);
    // this.setState({
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: '',
    // });

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="subtitle">
            <input value="text" type="text" name="subtitle" />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
