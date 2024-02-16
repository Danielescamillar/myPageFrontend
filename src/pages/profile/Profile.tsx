// my-portfolio/src/pages/SkillsPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';


interface Profile {
  id: string;
  name: string;
  description: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setprofile] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchProfile= async () => {
      try {
        const response = await axios.get('https://danielescamillar-mypagebackend-node.onrender.com/api/profile');
        setprofile(response.data);
      } catch (error: any) {
        console.error('Failed to obtain skills:', error.message);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="Profile">
      <h2 >Resumen</h2>
      <ul>
        {profile.map(profile => (
          <div  key={profile.id}>
            <strong>{profile.description}</strong>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
