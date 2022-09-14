import { createContext, useContext } from "react";

const context = createContext();

const useAuth = () => {
  const authorizeContext = useContext(context);
  return authorizeContext;
};

function Provider({ children }) {
  const user = {
    login: true,
    img: null,
  };

  return <context.Provider value={{ user }}>{children}</context.Provider>;
}

export { context, useAuth, Provider };
