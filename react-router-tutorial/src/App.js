import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
