import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Story from './pages/Story';
import EquationsOne from './pages/EquationsOne';
import EquationsTwo from './pages/EquationsTwo';
import End from './pages/End';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/equationsone" element={<EquationsOne />} />
          <Route path="/equationstwo" element={<EquationsTwo />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
