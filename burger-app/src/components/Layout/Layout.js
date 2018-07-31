import React from 'react';
import Aux from '../../hoc/Auxiliary.js';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrops</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;
