import React from "react";
import classes from "./Toolbar.module.css";
import logo from "../../assets/images/logo.png";
import NavigationItems from "./NavigationItems/NavigationItems";

const toolBar = () => {
  return (
    <div className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
        <img src={logo} alt="Magic Burguer" />
      </div>
      <NavigationItems />
    </div>
  );
};
export default toolBar;
