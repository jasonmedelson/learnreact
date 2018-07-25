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
  constructor(props){
    super(props);
    console.log('App.js',props)
  }
  componentWillMount(){
    console.log('persons Inside componentWillMount')
  }
  componentDidMount(){
    console.log('persons Inside componentDidMount')
  }
  componentWillRecieveProps(nextProps){
    console.log('persons componentWillRecieveProps')
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('persons shouldComponentUpdate');
    return nextProps.persons !== this.props.persons;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('persons componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('persons componentDidUpdate')
  }
  render(){
    console.log('persons.js Inside render')
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
