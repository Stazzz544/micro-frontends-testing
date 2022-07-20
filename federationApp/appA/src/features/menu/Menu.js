import React from "react";
import './Menu.css'
import { Link   } from "react-router-dom";
import AppC from "../../App"

export const Menu = () => {
  return (
    <nav className="menu">
        <Link  className="menu__item"  to="/">About App (parent app)</Link>
        <Link  className="menu__item"  to="app_one">Appliaction B</Link>
        {AppC && <Link  className="menu__item"  to="app_two">Appliaction C</Link>}
        <Link  className="menu__item"  to="/users">Users (parent app)</Link>
    </nav>
  );
};

export default Menu;
