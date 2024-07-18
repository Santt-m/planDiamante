import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  
  const apiUrl = process.env.REACT_APP_API_URL;

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
      localStorage.setItem('authToken', response.data.token);
    } catch (error) {
      console.error('Error logging in', error);
      setError('Failed to login. Please check your credentials.');
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, { name, email, password, role: 'Santt' }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
      localStorage.setItem('authToken', response.data.token);
    } catch (error) {
      console.error('Error registering user', error.response.data);
      if (error.response && error.response.data.message === 'User already exists') {
        setError('User already exists. Please login or use a different email.');
      } else {
        setError('Failed to register. Please try again.');
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
