import React from "react";
import { ReactComponent as Logo } from "../../images/sushi_logo.svg";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <div className="logo-container" to="/">
      <Logo className="logo" />
    </div>
    <div className="options">
      <div className="option" to="/shop">
        SHOP
      </div>
      <div className="option" to="/shop">
        CONTACT
      </div>
    </div>
  </div>
);

export default Navbar;
