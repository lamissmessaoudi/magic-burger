import React, { Component } from "react"
import Burger from './Burger/Burger'
import BuildControls from './BurgerControls/BuildControls'
import axios from '../../utils/axios'
import Modal from './Modal/Modal'
import OrderSummery from './Modal/OrderSummery/OrderSummery'
import loadingGif from '../../assets/images/loading.gif'
import burger from "./Burger/Burger"


class BurgerBuilder extends Component {
  state = {
    ingredients: [],
    totalPrice: 5,
    ordered: true,
    isLoading: true,
    errorMessage: '',
    ingredientsPosition: [] ///Pour Ordonner Le Burger 
  }

  componentDidMount = () => {
    this.getBasicPriceFromServer()
    this.getIngredientsFromServer()
  }

  getIngredientsFromServer = () => {

    axios.get('ingredients')
      //promise : resultat non immediat 
      //asynchrone
      //reponse peut etre retourné /non accepté
      .then((response) => {
        console.log(response.data.ingredients)

        let ingredients = response.data.ingredients.map(ingredient => {
          return {
            ...ingredient,
            price: ingredient.price * 3 // on peut affecter des changemets avant de changer state
          }
        })

        this.setState({
          ingredients: ingredients, //<= ingredients is the tab from above
          ordered: false,
          isLoading: false,

        })
      })

      .catch((error) => {
        console.log(error)
        this.setState({
          errorMessage: 'Something went wrong : ' + error.message

        })
      })
  }

  getBasicPriceFromServer = () => {

    axios.get('basicPrice')

      .then((response) => {
        console.log(response.data.basicPrice)
        this.setState({
          totalPrice: response.data.basicPrice
        })
      })

      .catch((error) => {
        console.log(error)
      })

  }



  sendOrderHandler = () => {

    // axios.post(
    //   'http://51.75.20.206:3100/burger',
    //   { burger: this.state.ingredients })

    this.setState({
      isLoading: true,

    })


    axios.post('burger', { burger: this.state.ingredients })



      .then((response) => {

        console.log(response);
        //status: 200 => everything worked alright 

        this.setState({
          ordered: false,
          isLoading: false,

        })

      })

      .catch((error) => {
        console.log(error)
        this.setState({
          errorMessage: 'Something went wrong : ' + error.message

        })
      })

  }


  changeIngredients = (ingredientId, action) => {

    const newIngredients = [...this.state.ingredients];
    let newTotalPrice = this.state.totalPrice
    const newIngredientsPosition = [...this.state.ingredientsPosition]; ///Pour Ordonner Le Burger 

    const index = newIngredients.findIndex((ingredient) => {
      return ingredient.id === ingredientId
    })

    if (action === "add") {

      newIngredients[index].count++;
      newTotalPrice += this.state.ingredients[index].price
      newIngredientsPosition.push(ingredientId) ///Pour Ordonner Le Burger 

    }

    if (action === "remove") {

      newIngredients[index].count--;
      newTotalPrice -= this.state.ingredients[index].price

      ///Pour Ordonner Le Burger 
      const i = newIngredientsPosition.findIndex((ingredient) => {
        return ingredient === ingredientId
      })

      console.log("position i a effacer de tab pos est " + i)

      newIngredientsPosition.splice(i, 1)
    }

    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice,
      ingredientsPosition: newIngredientsPosition
    });

  };

  showOrHideOrderedSummeryHandler = () => {
    this.setState({
      ordered: !this.state.ordered

    })
  }


  render() {

    let modalContent = null
    if (this.state.isLoading) {
      modalContent = (
        <div>
          <div style={{ display: 'flex' }}>
            <h3 style={{ width: '80%' }}>
              fetching data from server
            </h3>
            <img
              style={{ width: '60px', height: '60px', }}
              src={loadingGif}
              alt="loading" />
          </div>
          <div>
            {this.state.errorMessage}
          </div>
        </div>

      )
    } else {
      modalContent = (
        <OrderSummery
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          showOrHideOrderedSummery={this.showOrHideOrderedSummeryHandler}
          sendOrder={this.sendOrderHandler}
        />
      )
    }

    return (<div>
      <Burger
        ingredientsProps={this.state.ingredients}
        positionProps={this.state.ingredientsPosition}///essai
      />
      <BuildControls
        ingredientsProps={this.state.ingredients}
        method={this.changeIngredients}
        totalPrice={this.state.totalPrice}
        showOrHideOrderedSummery={this.showOrHideOrderedSummeryHandler}
      />
      <Modal
        showOrHideOrderedSummery={this.showOrHideOrderedSummeryHandler}
        show={this.state.ordered}
        totalPrice={this.state.totalPrice}
      >
        {modalContent}
      </Modal>

    </div>);
  }
}



export default BurgerBuilder;
