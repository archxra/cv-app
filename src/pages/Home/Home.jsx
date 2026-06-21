import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { userData } from '../../services/data';
import './Home.scss';

function Home() {
  const navigate = useNavigate();

  return (
    <main
      className="home"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="home__overlay" />
      <div className="home__content">
        <div className="home__avatar-wrap">
          <img
            className="home__avatar"
            src={userData.avatar}
            alt={userData.name}
          />
        </div>
        <h1 className="home__name">{userData.name}</h1>
        <p className="home__title">{userData.title}</p>
        <p className="home__desc">{userData.description}</p>
        <Button
          text="Know more"
          variant="outline"
          onClick={() => navigate('/inner')}
        />
      </div>
    </main>
  );
}

export default Home;