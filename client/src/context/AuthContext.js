import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
      // Guarda el token en una cookie HttpOnly en lugar de localStorage
      document.cookie = `authToken=${response.data.token}; HttpOnly; Secure; SameSite=Strict`;
    } catch (error) {
      console.error('Error logging in', error);
      setError('Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, { name, email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setUser(response.data);
      // Guarda el token en una cookie HttpOnly en lugar de localStorage
      document.cookie = `authToken=${response.data.token}; HttpOnly; Secure; SameSite=Strict`;
    } catch (error) {
      console.error('Error registering user', error.response.data);
      if (error.response && error.response.data.message === 'User already exists') {
        setError('User already exists. Please login or use a different email.');
      } else {
        setError('Failed to register. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    // Elimina la cookie del token
    document.cookie = 'authToken=; Max-Age=0; Secure; SameSite=Strict';
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
