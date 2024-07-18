import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TherapistList from './components/TherapistList';
import SpaList from './components/SpaList';
import AuthPage from './components/AuthPage';
import About from './components/About';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/therapists" element={<TherapistList />} />
            <Route path="/spas" element={<SpaList />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={
              <div>
                <Hero />
                <TherapistList />
                <SpaList />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
