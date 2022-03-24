import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { BoxArrowRight } from "react-bootstrap-icons";
import "../scss/Menu.scss";

const MenuLogin = () => {
  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {user ? (
        <>
          <p>{user.username}</p>
          <BoxArrowRight className="menu__logout-icon" onClick={logout} />
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </>
  );
};

export default MenuLogin;
