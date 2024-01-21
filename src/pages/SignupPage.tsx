import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../api';

const SignupPage: React.FC = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSignup = async () => {
        setShowError(false);
        setShowSuccess(false);
        
        try {
            const sign_response = await api.users.usersCreate({email: email, password: password});
            console.log(sign_response.status)
            if (sign_response.status === 200) {
                setShowSuccess(true);
                navigate('/login')
            } else {
                setShowError(true);
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setShowError(true);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="mb-4">Регистрация</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль:</label>
                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={handleSignup} className="btn btn-primary">Зарегистрирваться</button>

            {showError && <div style={{ color: 'red' }}>Неверные данные</div>}
            {showSuccess && <div style={{ color: 'green' }}>Успешно!</div>}
        </div>
    );
};

export default SignupPage;
