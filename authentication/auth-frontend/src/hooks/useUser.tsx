import { createContext, useContext } from "react";

export type UserContextType = {
  user: string | undefined;
  setUser: (user: string | undefined) => void;
};

export const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);


