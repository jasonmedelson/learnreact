import React from 'react';
import Aux from '../../hoc/Auxiliary.js';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrops</div>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout;
