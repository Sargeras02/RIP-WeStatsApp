import React from 'react';
import { useUser } from '../redux/store/auth/selector';

const MainNavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">WeStats</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stations">Станции</a>
            </li>
            {useUser() ? <li className="nav-item">
              <a className="nav-link" href="/measurements">Показания</a>
            </li> : null}
            <li className="nav-item">
            <a className="nav-link" href={useUser() ? '/profile' : '/login'}>
              {useUser() ? 'Профиль' : 'Войти'}
            </a>
            </li>
            {!useUser() ? <li className="nav-item">
            <a className="nav-link" href='/signup'>
              Зарегистрироваться
            </a>
            </li> : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
