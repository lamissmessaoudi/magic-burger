import React, { Component } from "react"
import Burger from './Burger/Burger'
import BuildControls from './BurgerControls/BuildControls'
import axios from 'axios'

class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 4
  }


  componentDidMount() {

    this.getIngredientsFromServer()
  }

  getIngredientsFromServer = () => {

    axios.get('http://51.75.20.206:3100/ingredients')

      .then((response) => {
        console.log(response.data.ingredients)
        this.setState({
          ingredients: response.data.ingredients
        })
      })

      .catch((error) => {
        console.log(error)
      })

  }

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
    return (<div>
      <Burger ingredientsProps={this.state.ingredients} />
      <BuildControls
        ingredientsProps={this.state.ingredients}
        method={this.changeIngredients}
        totalPrice={this.state.totalPrice}
      />

    </div>);
  }
}



export default BurgerBuilder;
