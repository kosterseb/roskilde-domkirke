import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

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
  )
}

export default App
