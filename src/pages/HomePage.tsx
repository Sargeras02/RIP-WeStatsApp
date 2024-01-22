import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundImage: 'url("/public/background.png")', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
      <div>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Добро пожаловать в нашу метеослужбу</h1>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
          Мы предоставляем метеорологические данные на коммерческой основе, предлагаем доступ к архивным метеоданным,
          и публикуем информацию о погоде в режиме реального времени.
        </p>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Разработано Костиным Сергеем, группа IU5-55B</p>
      </div>
    </div>
  );
};

export default HomePage;
