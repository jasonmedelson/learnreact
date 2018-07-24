import React from 'react';
import classes from './Person.css';
import Radium from 'radium';
// function person(){
//   return anything;
// }



// ES6 Arrow function is Reccomended
// const person = () =>{
//   return <p>I am a react person and i am {Math.floor(Math.random()*30)} years old</p>
// }

const person = (props) =>{
  const style = {
    '@media (min-width: 500px)':{
      width:'450px'
    }
  }

  return (
    <div className = {classes.Person} >
      <p onClick={props.click}>I'm {props.name} and i am {props.age} years old</p>
      <p>{props.children}</p>
      {/* onChange updates name value, value shows original value of name */}
      <input type="text" onChange= {props.changed} value = {props.name} ></input>
    </div>
  )
}
// for media style root is needed
export default Radium(person);
