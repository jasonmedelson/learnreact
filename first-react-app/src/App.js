import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  //  in Component you can define state
  state = {
    persons:[
      {name:'Jason', age:'22'},
      {name: "Stacy", age: "23"},
      {name: "Alice", age: "24"}]
  }
  // Method, camelCase for eventhandler
  switchNameHandeler = () =>{
    // Does not work
    // this.state.persons[0].name = 'Maximillian'
    this.setState({persons:[
      {name:'Not Jason', age:'22'},
      {name: 'Stacy', age: '223'},
      {name: 'Not Alice', age: '24'}]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>hello i am a react app</h1>
        <p>This is really working!</p>
        {/* this refers to the class // no parenthese or else it executes immediatly */}
        <button onClick={this.switchNameHandeler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello</Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hi</Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'hello i am a react app'))
  }
}

export default App;
