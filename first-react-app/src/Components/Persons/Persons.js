import React, {Component} from 'react';
import Person from './Person/Person.js';

// const persons = (props) => props.persons.map((person,index) =>{
//   return <Person
//     name={person.name}
//     age={person.age}
//     click={() => props.clicked(index)}
//     key={index} // should always be unique
//     changed={(event) => props.changed(event, index)}
//     ></Person>
// }
// );

class Persons extends Component{
  render(){
    return this.props.persons.map((person,index) =>{
      return <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={index} // should always be unique
          changed={(event) => this.props.changed(event, index)}
          ></Person>
    });
  }
}

export default Persons
