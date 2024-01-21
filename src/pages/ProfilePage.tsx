import React from 'react';
import { useUser } from '../redux/store/auth/selector';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { api } from '../api';
import { authActions } from '../redux/store/auth/slice';
import Cookies from 'js-cookie';

// Импортируйте компоненты для разных ролей
// import AdminComponent from './AdminComponent';
// import UserComponent from './UserComponent';
import MeteorologistCard from '../components/roles/MeteorologistCard';
import ManagerCard from '../components/roles/ManagerCard';
import UserCard from '../components/roles/UserCard';
import AdminCard from '../components/roles/AdminCard';
// import ManagerComponent from './ManagerComponent';

const ProfilePage: React.FC = () => {
    const user = useUser();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    if (!user) {
      navigate('/RIP-WeStatsApp/login');
    }

    const handleLogout = async () => {
      try {
        await api.logout.logoutCreate();
        dispatch(authActions.setUserAuth(null));
        Cookies.remove('session_id');
        navigate('/RIP-WeStatsApp/login');
      } catch (error) {
        console.error('Ошибка выхода:', error);
      }
    };

    // Функция, которая возвращает соответствующий компонент в зависимости от роли
      const getRoleComponent = () => {
        switch (user?.role) {
          case 'Админ':
            return <AdminCard />; // ДОБАВИТЬ СТАНЦИЮ / РОЛИ
          case 'Менеджер':
            return <ManagerCard />; // ОЧЕРЕДЬ / АРХИВ - ЗАКАЗОВ
          case 'Пользователь':
            return <UserCard />; // ТЕКУЩИЙ / ВСЕ - ЗАКАЗЫ
          case 'Метеоролог':
            return <MeteorologistCard />;
          default:
            return null;
        }
      };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Профиль пользователя</h2>
            
            {user?.role === 'Админ' && (
            <div className="alert alert-success" role="alert">
                Вы авторизованы как администратор.
            </div>
            )}

            <div className="mb-3">
                <strong>Имя:</strong> {user?.name}
            </div>
            <div className="mb-3">
                <strong>Email:</strong> {user?.email}
            </div>
            {/* <div className="mb-3">
                <strong>Роль:</strong> {user?.role}
            </div> */}

            {/* Отображаем компонент в зависимости от роли пользователя */}
            {getRoleComponent()}

            <button className="btn btn-danger" onClick={handleLogout}>
              Выйти
            </button>
        </div>
      );
};

export default ProfilePage;
