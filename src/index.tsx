import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { UserContextProvider } from "./context/UserContextProvider";
import { MessageContextProvider } from "./context/MessageContextProvider";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <MessageContextProvider>
          <App />
        </MessageContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
