import { createContext, useContext } from "react";
import { IMessage } from "../models/Message";

export type MessageContent = {
  message: IMessage | null;
  addMessage: (message: IMessage) => void;
  clearMessage: () => void;
};

const MessageContext = createContext<MessageContent>({
  message: null,
  addMessage: () => null,
  clearMessage: () => null,
});

const useMessageContext = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error("useMessageContext was used outside of its Provider");
  }

  return context;
};

export { MessageContext, useMessageContext };
