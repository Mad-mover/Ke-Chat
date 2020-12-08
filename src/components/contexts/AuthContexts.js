import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(true);

  function currentWidth() {
    const screen = window.innerWidth;
    screen >= 768 ? setWidth(true) : setWidth(false);
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    window.addEventListener("resize", currentWidth);
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    width
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
