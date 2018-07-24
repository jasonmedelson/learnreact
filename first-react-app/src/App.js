import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person.js';

class App extends Component {
  //  in Component you can define state
  state = {
    persons:[
      {name:'Jason', age:'22'},
      {name: "Stacy", age: "23"},
      {name: "Alice", age: "24"}],
    otherState :'other value',
    showPersons:false,

  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); // sets showPersons to opposite of current state
  }
  // Method, camelCase for eventhandler
  switchPersonHandeler = (newName) =>{
    // Does not work
    // this.state.persons[0].name = 'Maximillian'
    this.setState({persons:[
      {name: newName, age:'22'},
      {name: 'Stacy', age: '223'},
      {name: 'Not Alice', age: '24'}]
    })
  }
  personChangedHandeler = (event) =>{
    this.setState({persons:[
      {name: "Not Jason", age:'22'},
      {name: event.target.value, age: '223'},
      {name: 'Not Alice', age: '24'}]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click ={this.switchPersonHandeler.bind(this, 'Max')}>Hello</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed ={this.personChangedHandeler}></Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click ={this.switchPersonHandeler}>Hi</Person>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>hello i am a react app</h1>
        <p>This is really working!</p>
        {/* this refers to the class // no parenthese or else it executes immediatly */}
        {/* arrow function for on click */}
        {/* bind Reccomended like in person 0 */}
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* after ? is for true, after colon is for false */}
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'hello i am a react app'))
  }
}

export default App;
