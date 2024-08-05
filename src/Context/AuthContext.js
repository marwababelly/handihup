import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const logout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
  
      setState({ isAuthenticated: false, user: null });
    } catch (error) {
      if (error.response && error.response.status === 401) {

        console.error('Token expired or invalid. Please log in again.');
      } else {
        console.error('Logout failed:', error);
      }
    }
  };
  
  

  const updateUser = (userData) => {
    setState(prevState => ({
      ...prevState,
      isAuthenticated: true,
      user: userData, 
    }));
  };

  return (
    <AuthContext.Provider value={{ ...state, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
