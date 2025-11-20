import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Home from './pages/Home';
import Story from './pages/Story';
import EquationsOne from './pages/EquationsOne';
import EquationsTwo from './pages/EquationsTwo';
import End from './pages/End';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/equationsone" element={<EquationsOne />} />
        <Route path="/equationstwo" element={<EquationsTwo />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  );
}

function App() {
  // Use base path for production (GitHub Pages), root for development
  const basename = import.meta.env.MODE === 'production' ? '/roskilde-domkirke' : '/';

  return (
    <Router basename={basename}>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
