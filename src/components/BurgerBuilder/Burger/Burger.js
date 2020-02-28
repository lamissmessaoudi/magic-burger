import React from "react";
import classes from "./Burger.module.css";
import Ingredient from "./Ingredient/Ingredient";

const burger = (props) => {

  let ingredientComponents = []
  for (let ingredient of props.ingredientsProps)
    for (let i = 0; i < ingredient.count; i++)
      ingredientComponents.push(<Ingredient type={ingredient.label} />)



  // props.ingredientsProps.map((ingredient) => {
  //   return <Ingredient type={ingredient.label} />
  // })

  return (
    <div className={classes.Burger}>
      <Ingredient type={"bread-top"} />
      {ingredientComponents}
      <Ingredient type="bread-bottom" />
    </div>
  );
};
export default burger;
