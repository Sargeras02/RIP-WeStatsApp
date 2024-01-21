import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../api';
import { useAppDispatch } from '../redux/store';
import { authActions } from '../redux/store/auth/slice';
import { currentOrderActions } from '../redux/store/cntOrder/slice';

const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleLogin = async () => {
        setShowError(false);
        setShowSuccess(false);
        
        try {
            const auth_response = await api.login.loginCreate({email: email, password: password});
            console.log(auth_response.status)
            if (auth_response.status === 200) {
                setShowSuccess(true);
                try {
                    const profile_response = await api.profile.profileList();
                    dispatch(authActions.setUserAuth(profile_response.data));
                    
                    try {
                        const order_response = await api.userorders.userordersCurrentList();
                        if (order_response.data) {
                            dispatch(currentOrderActions.setCurrentOrder({
                                orderInfo: order_response.data.order,
                                cart: order_response.data.measurements,
                            }))
                        }
                        else {
                            dispatch(currentOrderActions.flush())
                        }
                    } catch (error) {
                        console.error('Ошибка загрузки заказа', error);
                    }
        
                    navigate('/RIP-WeStatsApp/profile')
                } catch (error) {
                    console.error('Ошибка загрузки профиля', error);
                }
            } else {
                setShowError(true);
            }
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setShowError(true);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="mb-4">Авторизация</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль:</label>
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={handleLogin} className="btn btn-primary">Войти</button>

            {showError && <div style={{ color: 'red' }}>Неверные данные</div>}
            {showSuccess && <div style={{ color: 'green' }}>Успешно!</div>}
        </div>
    );
};

export default LoginPage;
