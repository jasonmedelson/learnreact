import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary.js';
import Burger from '../../components/Burger/Burger.js'

class BurgerBuilder extends Component{
  state = {
    ingredients:{
      bacon:1,
      salad:1,
      cheese:1,
      meat:1,
    }
  }

  render(){
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
