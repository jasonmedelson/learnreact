import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary.js'

const cockpit = (props) => {
  const assigned = [];
  let btnClass = "";
  if (props.showPersons){
    btnClass = classes.red;
  }

  if(props.persons.length <= 2){
    assigned.push(classes.red);
  }
  if(props.persons.length <= 1){
    assigned.push(classes.bold);
  }

  return (
    // <div className={classes.Cockpit}>
    // <>
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assigned.join(" ")}>This is really working!</p>
      {/* this refers to the class // no parenthese or else it executes immediatly */}
      {/* arrow function for on click */}
      {/* bind Reccomended like in person 0 */}
      <button onClick={props.toggle}>Toggle Persons</button>
      {/* after ? is for true, after colon is for false */}
    </Aux>
    //</> 
    // </div>
  );
}

export default cockpit;
