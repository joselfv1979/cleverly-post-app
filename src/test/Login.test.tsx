import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import LoginView from "../views/LoginView";
import { BrowserRouter } from "react-router-dom";

test("submits username and password", async () => {

  render(
    <BrowserRouter>
      <LoginView />
    </BrowserRouter>
  );

  const inputUsername = screen.getByPlaceholderText("Enter username");
  const inputPassword = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByRole("button", {name: "Sign in"});

  const loginForm = screen.getByRole("form");

  expect(inputUsername).toBeInTheDocument();
  expect(inputUsername).toHaveTextContent("");
  expect(inputPassword).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  expect(loginForm).toBeInTheDocument();
});
