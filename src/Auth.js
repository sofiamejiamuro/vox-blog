import React, { useState, useEffect} from 'react';

// Authentication
import { auth } from './firebase-config';

// AuthContext Propagate date through all react app tree
export const AuthContext = React.createContext();

// Authprovider stores auth status
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  // useEffect will execute once when the component is mounted 
  useEffect(() => {
    auth.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      { children }
    </AuthContext.Provider>
  )
};