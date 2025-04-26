import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ routes }) => {
  const [user, setUser] = useState(null);

  // Sign Up
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut

  const handleLogOut = () => {
    setUser(null);
    return signOut();
  };

  // Google Login
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Manage Profile

  const manageProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   OnAuthStateChange

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    handleRegister,
    handleLogOut,
    handleLogin,
    handleGoogleLogin,
    user,
    setUser,
    manageProfile,
  };

  return <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>;
};

export default AuthProvider;
