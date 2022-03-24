import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../scss/Home.scss";

const Home = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const getNavigate = () => {
    user ? navigate("/posts") : navigate("/login");
  };

  return (
    <div className="home">
      <h1 className="home__title home__title--header">Welcome to Post Manager!</h1>
      <h2 className="home__title home__title--enter" onClick={() => getNavigate()}>
        Enter
      </h2>
    </div>
  );
};

export default Home;
