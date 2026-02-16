import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/how-it-works" element={<Home />} />
        <Route path="/for-publishers" element={<Home />} />
        <Route path="/for-manufacturers" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/get-started" element={<Home />} />
        <Route path="/auth-signin" element={<Home />} />
        <Route path="/public-orders" element={<Home />} />
        <Route path="/mission" element={<Home />} />
        <Route path="/team" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/privacy" element={<Home />} />
        <Route path="/terms" element={<Home />} />
        <Route path="/safety" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

