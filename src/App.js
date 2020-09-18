import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Header from './components/Header';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default App;
