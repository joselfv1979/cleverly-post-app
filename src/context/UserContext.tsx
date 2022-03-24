import { createContext, useContext } from "react";
import { IUser } from "../models/User";

export type UserContent = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

const UserContext = createContext<UserContent>({
  user: null,
  setUser: () => null
});

const useUserContext = () => {
  
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};

export { UserContext, useUserContext };
