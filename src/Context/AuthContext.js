import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  userRole: null,
  logout: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null,
    userRole: null,
  });

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${state.user?.token}`,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      setState({ isAuthenticated: false, user: null, userRole: null });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Token expired or invalid. Please log in again.");
      } else {
        console.error("Logout failed:", error);
      }
    }
  };

  const updateUser = async (user) => {
    console.log("Updating user:", user);
    setTimeout(() => {
      setState((prevState) => ({
        isAuthenticated: true,
        user: user,
        userRole: user.type,
      }));
      console.log("Updated state:", state);
      localStorage.setItem("token", user.token);
      localStorage.setItem("userRole", user.type);
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    }, 0);

    if (isTokenExpired(user.token)) {
      console.error("Token expired. Logging out...");
      await logout();
      return;
    }
  };

  return (
    <AuthContext.Provider value={{ state, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("useAuth:", context);
  return context;
};
