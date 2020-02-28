import React, { Component } from "react";
import Burger from './Burger/Burger'
import BuildControls from './BurgerControls/BuildControls'
class BurgerBuilder extends Component {
  state = {
    ingredients: [
      {
        label: 'salad',
        count: 1,
        price: 0,
      },
      {
        label: 'escalope',
        count: 1,
        price: 0,
      },
      {
        label: 'meat',
        count: 1,
        price: 0,
      },
      {
        label: 'cheese',
        count: 1,
        price: 0,
      }
    ]
  }
  render() {
    return <div>
      <Burger ingredientsProps={this.state.ingredients} />
      <BuildControls listControls={this.state.ingredients} />

    </div>;
  }
}
export default BurgerBuilder;
