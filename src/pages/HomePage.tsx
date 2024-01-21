import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url("/RIP-WeStatsApp/images/background.png")', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
      <div>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Welcome to our Weather Service</h1>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          We provide meteorological data on a commercial basis, offer access to archival weather information,
          and publish real-time weather conditions.
        </p>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Developed by Kostin Sergey IU5-55B</p>
      </div>
    </div>
  );
};

export default HomePage;
