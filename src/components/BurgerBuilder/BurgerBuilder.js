import React, { Component } from "react";
import Burger from './Burger/Burger'
import BuildControls from './BurgerControls/BuildControls'
class BurgerBuilder extends Component {
  state = {
    ingredients: [
      {
        id: 0,
        label: 'salad',
        count: 0,
        price: 0.5,
        max: 2,

      },
      {
        id: 1,
        label: 'escalope',
        count: 0,
        price: 3.8,
        max: 2,
      },
      {
        id: 2,
        label: 'meat',
        count: 0,
        price: 5.3,
        max: 2,
      },
      {
        id: 3,
        label: 'cheese',
        count: 0,
        price: 2.3,
        max: 2,
      }
    ],
    totalPrice: 4
  }

  // addIngredients = (ingredientId) => {
  //   const newIngredients = [...this.state.ingredients];
  //   const index = newIngredients.findIndex((ingredient) => {
  //     return ingredient.id === ingredientId
  //   })
  //   newIngredients[index].count++;
  //   this.setState({
  //     ingredients: newIngredients,
  //     totalPrice: (this.state.totalPrice + this.state.ingredients[index].price)
  //   });
  // };

  changeIngredients = (ingredientId, action) => {
    const newIngredients = [...this.state.ingredients];
    let newTotalPrice = this.state.totalPrice
    const index = newIngredients.findIndex((ingredient) => {
      return ingredient.id === ingredientId
    })

    if (action === "add") {

      newIngredients[index].count++;
      newTotalPrice += this.state.ingredients[index].price

    }

    if (action === "remove") {

      newIngredients[index].count--;
      newTotalPrice -= this.state.ingredients[index].price

    }
    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });

  };



  render() {
    return <div>
      <Burger ingredientsProps={this.state.ingredients} />
      <BuildControls
        ingredientsProps={this.state.ingredients}
        method={this.changeIngredients}
        totalPrice={this.state.totalPrice}
      />

    </div>;
  }
}
export default BurgerBuilder;
