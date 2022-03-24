import React, { ReactNode, useState } from "react";
import { IUser } from "../models/User";
import { UserContext } from "./UserContext";

type Props = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: Props) => {
  const storedUser = localStorage.getItem("user");

  const itemUser = storedUser ? JSON.parse(storedUser) : null;

  const [user, setUser] = useState<IUser | null>(itemUser);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
