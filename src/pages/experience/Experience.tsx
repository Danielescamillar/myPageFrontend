// my-portfolio/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './experience.css';


interface Experience {
    id: string;
    title: string;
    date: string;
    company: string;
    description: string;
}

const ExperiencePage: React.FC = () => {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperience= async () => {
      try {
        const response = await axios.get('https://danielescamillar-mypagebackend-node.onrender.com/api/experience');
        setExperience(response.data);
      } catch (error: any) {
        console.error('Failed to obtain experiences:', error.message);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="Experience">
      <h2 >Experience</h2>
      <ul>
        {experience.map(experience => (
          <div  key={experience.id}>
            <strong>{experience.company}</strong>
            <h1 >{experience.date}</h1>
            <h1 >{experience.title}</h1>
            <h1 >{experience.description}</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencePage;
