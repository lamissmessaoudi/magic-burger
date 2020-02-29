import React, { Component } from "react";
import Burger from './Burger/Burger'
import BuildControls from './BurgerControls/BuildControls'
class BurgerBuilder extends Component {
  state = {
    ingredients: [
      {
        label: 'salad',
        count: 0,
        price: 1,
      },
      {
        label: 'escalope',
        count: 0,
        price: 2,
      },
      {
        label: 'meat',
        count: 0,
        price: 3,
      },
      {
        label: 'cheese',
        count: 0,
        price: 4,
      }
    ],
    totalPrice: 4
  }

  addIngredients = (ingredient) => {
    const newIngredients = [...this.state.ingredients];
    const index = newIngredients.indexOf(ingredient);
    newIngredients[index].count++;
    this.setState({
      ingredients: newIngredients,
      totalPrice: (this.state.totalPrice + ingredient.price)
    });
  };

  removeIngredients = (ingredient) => {
    const newIngredients = [...this.state.ingredients];
    const index = newIngredients.indexOf(ingredient);
    if (newIngredients[index].count > 0) {
      newIngredients[index].count--;
      this.setState({
        ingredients: newIngredients,
        totalPrice: (this.state.totalPrice - ingredient.price)

      });
    }
  };



  render() {
    return <div>
      <Burger ingredientsProps={this.state.ingredients} />
      <BuildControls
        ingredientsProps={this.state.ingredients}
        methodAdd={this.addIngredients}
        methodRemove={this.removeIngredients}
        totalPrice={this.state.totalPrice}
      />

    </div>;
  }
}
export default BurgerBuilder;
