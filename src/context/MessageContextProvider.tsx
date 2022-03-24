import React, { ReactNode, useState } from "react";
import { IMessage } from "../models/Message";
import { MessageContext } from "./MessageContext";

type Props = {
  children: ReactNode;
};

export const MessageContextProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<IMessage | null>(null);

  const addMessage = (message: IMessage) => {
    setMessage(message);
    removeMessage();
  };

  const clearMessage = () => setMessage(null);

  const removeMessage = () => {
    setTimeout(() => {
      clearMessage();
    }, 4000);
  };

  return (
    <MessageContext.Provider value={{ message, addMessage, clearMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
