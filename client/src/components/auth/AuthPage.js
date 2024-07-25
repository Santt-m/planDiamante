import React, { useState } from 'react';

const AuthPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
      try {
          const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          const data = await response.json();
          console.log(data);
      } catch (error) {
          console.error('Error during login:', error);
      }
  };
  
  const handleRegister = async () => {
      try {
          const response = await fetch('/api/auth/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          const data = await response.json();
          console.log(data);
      } catch (error) {
          console.error('Error during registration:', error);
      }
  };
  
    return (
        <div>
            <h1>Auth Page</h1>
            <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default AuthPage;
