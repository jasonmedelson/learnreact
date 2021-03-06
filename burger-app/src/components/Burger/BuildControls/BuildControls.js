import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js'


const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'Meat'},
];


const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl =>(
      <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>
    ))}
  </div>

)

export default buildControls;
