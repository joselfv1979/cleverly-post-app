import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../scss/Menu.scss";
import MenuLogin from "./MenuLogin";

const Menu = () => {
  const { user } = useUserContext();
  const isAdmin = user?.username === "admin" ? true : false;

  const activeStyle = "menu__li menu__li--active";
  const inactiveStyle = "menu__li";

  return (
    <ul className="menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Post Manager
      </NavLink>
      {isAdmin && (
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Posts
        </NavLink>
      )}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Contact
      </NavLink>
      <li className="menu__li menu__li--login">
        <MenuLogin />
      </li>
    </ul>
  );
};

export default Menu;
