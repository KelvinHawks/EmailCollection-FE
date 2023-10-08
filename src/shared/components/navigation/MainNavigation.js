import React from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import Avatar from "../../UIelements/Avatar";
function MainNavigation() {
  return (
    <>
      <MainHeader className="container">
        <Avatar src=".././images/logo.jpg" alt="logo" />
      </MainHeader>
    </>
  );
}

export default MainNavigation;
