// my-portfolio/src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/profile/Profile';
import SkillsPage from './pages/skills/Skills';
import ExperiencePage from './pages/experience/Experience';
import Home from './pages/home/Home';


function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/skills"
            element={<SkillsPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
