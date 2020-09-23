import React from 'react';
import theCoyote from '../img/1.png';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <div className="cubo">
          <img src={theCoyote} alt="imagem" width="60" />
          <img src={theCoyote} alt="girando" width="60" />
          <img src={theCoyote} alt="com o logo" width="60" />
          <img src={theCoyote} alt="do coyote" width="60" />
        </div>
      </header>
    );
  }
}

export default Header;
