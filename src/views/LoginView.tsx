import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { IUser } from "../models/User";
import { loginUser } from "../services/login";
import { useMessageContext } from "../context/MessageContext";
import "../scss/Login.scss";

const LoginView = () => {
  const { setUser } = useUserContext();
  const { addMessage } = useMessageContext();
  const initialState: IUser = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = loginUser(values);
      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/posts");
    } catch (error) {
      if (error instanceof Error) {
        addMessage({
          type: "error",
          text: error.message,
        });
      }
    }
  };

  return (
    <>
    <form className="login-form" name="login-form" onSubmit={login}>
      <h1 className="login-form__header">Login</h1>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        onChange={onChange}
        className="login-form__input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChange}
        className="login-form__input"
      />
      <button className="login-form__button" type="submit">
        Sign in
      </button>
    </form></>
  );
};

export default LoginView;
