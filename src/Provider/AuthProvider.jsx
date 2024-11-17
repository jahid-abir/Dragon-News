import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loader,setLoader] = useState(true)
  console.log(user,loader)

  const getSignUp = (email,password) =>{
    setLoader(true)
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    setLoader(true)
    return signOut(auth)
  }

  const getLogIn = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
  } 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
      setLoader(false)
    })
    return () =>{
      unSubscribe()
    }
  },[])
    const authInfo = {
        user,
        setUser,
        getSignUp,
        logOut,
        getLogIn,
        loader
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;