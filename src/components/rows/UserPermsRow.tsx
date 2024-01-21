import { Button, Spinner } from 'react-bootstrap';
import { WeStatsUser } from '../../api/WeStatsApiModel';
import { api } from '../../api';
import { useState } from 'react';

interface UserRowProps {
  user: WeStatsUser;
  loading: boolean;
}

const UserPermsRow: React.FC<UserRowProps> = ({ user, loading }) => {
    const [userRole, setUserRole] = useState(user.user_role);

    const handleMakeUser = async() => { await handleSave('just_user')};
    const handleMakeMeteo = async() => { await handleSave('meteorologist')};
    const handleMakeManager = async() => { await handleSave('r_manager')};
    const handleMakeAdmin = async() => { await handleSave('r_admin')};
    const handleSave = async(role: "just_user" | "meteorologist" | "r_manager" | "r_admin") => {
        try {
            await api.updateUserRole.updateUserRoleCreate(user.user_id!.toString(), {role: role});
            setUserRole(role)
        } catch (error) {
            console.error('Ошибка при сохранении изменений:', error);
        }
    };

    return (
        <div key={user.user_id} className="userRow">
          <div className="d-flex align-items-center">
            <span className="me-2">{user.name}</span>
            <span>{user.email}</span>
          </div>
      
          <div className="d-flex align-items-center mt-2">
            <Button
              variant="success"
              disabled={loading || userRole === 'just_user'}
              onClick={handleMakeUser}
              className="me-2"
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Пользователь'}
            </Button>
            <Button
              variant="success"
              disabled={loading || userRole === 'meteorologist'}
              onClick={handleMakeMeteo}
              className="me-2"
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Метеоролог'}
            </Button>
            <Button
              variant="success"
              disabled={loading || userRole === 'r_manager'}
              onClick={handleMakeManager}
              className="me-2"
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Менеджер'}
            </Button>
            <Button
              variant="danger"
              disabled={loading || userRole === 'r_admin'}
              onClick={handleMakeAdmin}
            >
              {loading ? <Spinner animation="border" size="sm" /> : 'Админ'}
            </Button>
          </div>
          <hr />
        </div>
      );      
};

export default UserPermsRow;
