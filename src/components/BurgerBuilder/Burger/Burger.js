import React from "react";
import classes from "./Burger.module.css";
import Ingredient from "./Ingredient/Ingredient";
import ingredient from "./Ingredient/Ingredient";

const burger = (props) => {

  ///  SANS ORDERE
  // let ingredientComponents = []
  // for (let ingredient of props.ingredientsProps)
  //   for (let i = 0; i < ingredient.count; i++)
  //     ingredientComponents.push(<Ingredient
  //       key={ingredient.id + ' ' + i}
  //       type={ingredient.label} />)

  ///  AVEC ORDERE
  let ingredientComponents = []
  for (let ident of props.positionProps) {

    // let ingredientAA
    // props.ingredientsProps.map((ingredientFound) => {
    //   if (ingredientFound.id === ident)
    //     return ingredientAA = ingredientFound })

    let ingredientAA = props.ingredientsProps.find(
      ingredient => ingredient.id == ident
    )

    ingredientComponents.push(
      <Ingredient
        key={ingredientAA.id + ' ' + ingredientComponents.length}
        type={ingredientAA.label}
      />
    )

  }


  let message = null
  if (ingredientComponents.length === 0)
    message = <p> Please start adding ingredients !!</p>

  // props.ingredientsProps.map((ingredient) => {
  //   return <Ingredient type={ingredient.label} />
  // })

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {message}
      {ingredientComponents}
      <Ingredient type="bread-bottom" />
    </div>
  );
};
export default burger;
