import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello i am a react app</h1>
        <p>This is really working!</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'hello i am a react app'))
  }
}

export default App;
