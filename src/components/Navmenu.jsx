import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navmenu = () => {
  return (
    <nav>
      <h2><a className="shop-title" href="/">Timbu Cloud Shop</a></h2>
      <div className="cart-container">
        <MdOutlineShoppingCart className="header-icons-cart" />
      </div>
    </nav>
  );
};

export default Navmenu;
