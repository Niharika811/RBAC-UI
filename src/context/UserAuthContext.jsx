import React, { createContext, useContext, useState, useEffect } from "react";

// Create the authentication context
const UserAuthContext = createContext();

// Custom hook to access the auth context
export const useUserAuth = () => useContext(UserAuthContext);

export const UserAuthProvider = ({ children }) => {
  // Manage auth state with localStorage persistence
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  // Sync auth state with localStorage whenever it changes
  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth]);

  // Logout function to clear auth state and localStorage
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  return (
    <UserAuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};
