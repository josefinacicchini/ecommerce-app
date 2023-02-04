import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

export const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
    error: null,
    loaded: false,
  });

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      // .then((userCredential)=> {
      //     setUser({
      //         email: userCredential.user.email,
      //         logged: true,
      //         error: null
      //     })
      // })
      .catch((error) => {
        setUser({
          email: null,
          logged: false,
          error: error.message,
          // loaded: true
        });
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({
        email: "",
        logged: false,
        error: null,
      });
    });
  };

  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      // .then((userCredential)=> {
      //     setUser({
      //         email: userCredential.user.email,
      //         logged: true,
      //         error: null
      //     })
      // })
      .catch((error) => {
        setUser({
          email: null,
          logged: false,
          error: error.message,
          // loaded: true
        });
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          logged: true,
          error: null,
          // loaded: true
        });
      } else {
        logout();
      }
    });
  }, []);

  return (
    <LoginContext.Provider value={{ user, login, logout, register }}>
      {children}
    </LoginContext.Provider>
  );
};
