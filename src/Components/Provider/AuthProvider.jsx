import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("Observe user", user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe(); // Call the unsubscribe function
    };
  }, []);

  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logInManually = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const registerManually = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    googleAuth,
    provider,
    logInManually,
    registerManually,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
