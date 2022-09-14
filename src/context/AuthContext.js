import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

const useAuth = () => {
  const authorizeContext = useContext(authContext);
  return authorizeContext;
};

function Provider({ children }) {
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
}

export { authContext, useAuth, Provider };
