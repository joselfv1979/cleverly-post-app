import React from "react";
import { useDispatch } from "react-redux";
import { useMessageContext } from "../context/MessageContext";
import { clearPostError } from "../redux/actionCreators/post";
import "../scss/Message.scss";

const Message = () => {
  const { message, clearMessage } = useMessageContext();
  const dispatch = useDispatch();
  const errorMessage = message?.type === "error" ? true : false;
  
  const clearNotification = () => {
    dispatch(clearPostError());
    clearMessage();
  };

  return (
    <>
      {message && (
        <div
          className={`message message--${errorMessage ? "error " : "success"}`}
        >
          <p className="message__content">{message.text}</p>
          <span className="message__span" onClick={() => clearNotification()}>
            x
          </span>
        </div>
      )}
    </>
  );
};

export default Message;
