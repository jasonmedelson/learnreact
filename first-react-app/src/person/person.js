import React from 'react';
// function person(){
//   return anything;
// }

// ES6 Arrow function is Reccomended
// const person = () =>{
//   return <p>I am a react person and i am {Math.floor(Math.random()*30)} years old</p>
// }

const person = (props) =>{
  return (
    <div>
      <p>I'm {props.name} and i am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;
