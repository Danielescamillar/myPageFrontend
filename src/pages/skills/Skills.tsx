// my-portfolio/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './skills.css';
import node from '../../img/node.jpg';


interface Skill {
  id: string;
  name: string;
  description: string;
  image: string;
}

const SkillsPage: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('https://danielescamillar-mypagebackend-node.onrender.com/api/skills');
        setSkills(response.data);
      } catch (error: any) {
        console.error('Error al obtener habilidades:', error.message);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="Skills">
      <h2 >Mis Habilidades</h2>
      <ul>
        {skills.map(skill => (
          <div className="Skill" key={skill.id}>
            <img src={node}/>
            <strong>{skill.name}</strong> {skill.description}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
