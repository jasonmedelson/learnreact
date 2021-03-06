import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import otherClasses from '../Components/Persons/Person/Person.css';
import Person from '../Components/Persons/Person/Person.js';
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit.js';
import Radium, {StyleRoot} from 'radium';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';
import WithClass from '../hoc/WithClass.js';

class App extends Component {
  //regular state prefered
  //constructor is old way to do it
  constructor(props){
    super(props);
    console.log('App.js',props)
    this.state = {
      persons:[
        {name:'Jason', age:'22'},
        {name: "Stacy", age: "23"},
        {name: "Alice", age: "24"}],
      otherState :'other value',
      showPersons:false,

    };
  }

  componentWillMount(){
    console.log('Inside componentWillMount')
  }

  componentDidMount(){
    console.log('Inside componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('app.js shouldComponentUpdate');
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
      // {PureComponent will handle this automatically}
  }
  componentWillUpdate(nextProps,nextState){
    console.log('app.js componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('app.js componentDidUpdate')
  }

  //  in Component you can define state
  // state = {
  //   persons:[
  //     {name:'Jason', age:'22'},
  //     {name: "Stacy", age: "23"},
  //     {name: "Alice", age: "24"}],
  //   otherState :'other value',
  //   showPersons:false,
  //
  // }
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
    console.log('app.js Inside render')
    // no psudeo selecto like :hover
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer',
      //radium used for hover, hover must be wrapped with ''
      ':hover' : {
        backgroundColor: 'blue',
        color: 'white',
      }
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHangler}/>

          {/* key is looked for when mapping */}
          {/* map is basically a loop for js object/ creates index */}
          {/* {this.state.persons.map((person, index) =>{
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={index} // should always be unique
              changed={(event) => this.personChangedHandeler(event, index)}
              ></Person>
          })} */}

          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click ={this.switchPersonHandeler.bind(this, 'Max')}>Hello</Person> */}
          {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed ={this.personChangedHandeler}></Person> */}
          {/* <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click ={this.switchPersonHandeler}>Hi</Person> */}
        </div>
      );
      // style.backgroundColor = 'red';
    }

    return (
      // <StyleRoot>
      //   <div className={classes.App}>
        <WithClass classes={classes.App}>
          <button onClick={() => this.setState({showPersons:true})}>showPersons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons = {this.state.showPersons}
            persons={this.state.persons}
            toggle={this.togglePersonHandler}
          />
          {persons}
        </WithClass>
      //   </div>
      // </StyleRoot>

      //StyleRoot needed for media queries
      // <StyleRoot>
      //   <div className={classes.App}>
      //     <h1>hello i am a react app</h1>
      //     <p className={otherClasses.red.bold}>This is really working!</p>
      //     {/* this refers to the class // no parenthese or else it executes immediatly */}
      //     {/* arrow function for on click */}
      //     {/* bind Reccomended like in person 0 */}
      //     <button onClick={this.togglePersonHandler}>Toggle Persons</button>
      //     {/* after ? is for true, after colon is for false */}
      //     {persons}
      //   </div>
      // </StyleRoot>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'hello i am a react app'))
  }
}

export default Radium(App);
