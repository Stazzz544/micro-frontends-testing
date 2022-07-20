import React from "react";
import './Menu.css'
import { Link   } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="menu">
        <Link  className="menu__item"  to="/">About App</Link>
        <Link  className="menu__item"  to="app_one">Appliaction one</Link>
        <Link  className="menu__item"  to="app_two">Appliaction two</Link>
    </nav>
  );
};

export default Menu;
