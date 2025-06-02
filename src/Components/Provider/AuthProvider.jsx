import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const connection = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      connection(); // Call the unsubscribe function
    };
  }, []);

  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    return signInWithPopup(auth, provider);
  };

  const logInManually = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const registerManually = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass);
  };
  const authInfo = {
    user,
    googleAuth,
    provider,
    logInManually,
    registerManually,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
