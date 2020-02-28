import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem name="BurgerBuilder" active />
      <NavigationItem name="Check out" />
    </ul>
  );
};

export default navigationItems;
// active est un props si on lui affecte rien il prend bool true
