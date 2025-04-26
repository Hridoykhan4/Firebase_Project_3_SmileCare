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
import Swal from "sweetalert2";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ routes }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up
  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login

  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut

  const handleLogOut = () => {
    setLoading(true);
    setUser(null);
    notify("Log Out Successfully")
    return signOut(auth);
  };

  // Google Login
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Manage Profile

  const manageProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


   // Notify alert
   const notify = (title) => {
    Swal.fire({
      title: `${title}`,
      icon: "success",
      draggable: true,
    });
  };

  //   OnAuthStateChange

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    loading,
    notify
  };

  return <AuthContext.Provider value={authInfo}>{routes}</AuthContext.Provider>;
};

export default AuthProvider;
