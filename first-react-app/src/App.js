import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person.js';
import Radium from 'radium';

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
  deletePersonHandler = (personsIndex) =>{
    //slice creates copy, when empty is full copy
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons] //identical to slice , either works
    persons.splice(personsIndex,1);
    this.setState({persons:persons});
  }

  switchPersonHandeler = (newName) =>{
    // Does not work
    // this.state.persons[0].name = 'Maximillian'
    this.setState({persons:[
      {name: newName, age:'22'},
      {name: 'Stacy', age: '223'},
      {name: 'Not Alice', age: '24'}]
    })
  }
  personChangedHandeler = (event, index) =>{
    const person = {
      ...this.state.persons[index] //spread operator
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person
    this.setState(
      {persons: persons    })
  }
  render() {
    // no psudeo selecto like :hover
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer',
      backgroundColor: 'green',
      ':hover' : {
        backgroundColor: 'blue',
        color: 'white',
      }
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {/* key is looked for when mapping */}
          {/* map is basically a loop for js object/ creates index */}
          {this.state.persons.map((person, index) =>{
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={index} // should always be unique
              changed={(event) => this.personChangedHandeler(event, index)}
              ></Person>
          })}

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click ={this.switchPersonHandeler.bind(this, 'Max')}>Hello</Person> */}
          {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed ={this.personChangedHandeler}></Person> */}
          {/* <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click ={this.switchPersonHandeler}>Hi</Person> */}
        </div>
      );
      style.backgroundColor = 'red';
    }
    let classes = []
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>hello i am a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
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

export default Radium(App);
