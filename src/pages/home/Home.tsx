// my-portfolio/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './home.css';



const Home: React.FC = () => {


  return (
    <div className="Home">
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <a
                href="/profile"
                className="Home-link"
              >
              Daniel Escamilla
            </a>
            <a
                href="/skills"
                className="Home-link"
              >
              Habilidades
            </a>
            <a
                href="/experience"
                className="Home-link"
              >
              Experiencia
            </a>
          </header>
        </div>
  );
};

export default Home;
