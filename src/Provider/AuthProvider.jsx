import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  console.log(user)

  const getSignUp = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
    })
    return () =>{
      unSubscribe()
    }
  },[])
    const authInfo = {
        user,
        setUser,
        getSignUp,
        logOut
    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;