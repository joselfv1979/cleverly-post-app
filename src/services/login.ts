import { IUser } from "../models/User";

const adminUser: IUser = {
  username: "admin",
  password: "admin",
};

export const loginUser = (data: IUser) => {
  const checkUsername = data.username === adminUser.username ? true : false;
  const checkPassword = data.password === adminUser.password ? true : false;

  if (!checkUsername || !checkPassword) {
    throw new Error("Invalid user credentials");
  }

  return data;
};
