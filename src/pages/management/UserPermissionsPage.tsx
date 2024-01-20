import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import UserPermsRow from '../../components/rows/UserPermsRow';

import { api } from '../../api';
import { WeStatsUser } from '../../api/WeStatsApiModel';
import { useUser } from '../../redux/store/auth/selector';

const UserPermissionsPage: React.FC = () => {
    const user = useUser();
    const [users, setUsers] = useState<WeStatsUser[]>([]);

    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await api.users.usersList();
            setUsers(response.data)
        } catch (error) {
            console.error('Ошибка при получении пользователей:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = () => {
        // Ваша логика обработки поиска
    };

    return (
        <div className="container mt-5">
            {user && user.role == 'Админ' && (<div>
                <h2>Роли пользователей</h2>
                <div className="inputField d-flex justify-content-center mt-3">
                    <input
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    className="form-control me-3"
                    placeholder="Введите значение для поиска"
                    />
                    <Button disabled={loading} onClick={handleSearch} className="btn btn-primary me-3">
                    Искать
                    </Button>
                    {loading && <div className="loadingBg"><Spinner animation="border" /></div>}
                </div>
                <div className='mt-4'>
                    {users.map((user) => (
                        <UserPermsRow key={user.user_id} user={user} loading={loading} />
                    ))}
                </div>
            </div>)}

            {(!user || user.role !== 'Админ') && (
                <div className="warningDiv">
                <p className="text-danger">Вы не админ</p>
                </div>
            )}
        </div>
    );
};

export default UserPermissionsPage;
