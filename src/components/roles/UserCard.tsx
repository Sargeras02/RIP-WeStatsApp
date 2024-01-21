import React from 'react';
import { useCurrentOrder } from '../../redux/store/cntOrder/selector';
import { useAppDispatch } from '../../redux/store';
import { api } from '../../api';
import { currentOrderActions } from '../../redux/store/cntOrder/slice';

const UserCard: React.FC = () => {
    const currentOrder = useCurrentOrder().orderInfo;
    console.log(currentOrder)
    const dispatcher = useAppDispatch();

    const handleNewOrderClick = async () => {
        const response = await api.orders.ordersCreate();
        dispatcher(currentOrderActions.initNew(response.data))
    }

    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title"><strong>Роль:</strong> Пользователь</h5>
                <p className="card-text">Дополнительная информация о пользователе.</p>
                {currentOrder &&
                    <a href={`/RIP-WeStatsApp/profile/orders/${currentOrder.order_id}`} className="btn btn-primary mx-2">
                        Текущий заказ
                    </a>
                }
                {!currentOrder &&
                    <button className="btn btn-primary mx-2" onClick={handleNewOrderClick}>
                        Новый заказ
                    </button>
                }
                <a href="/RIP-WeStatsApp/profile/orders" className="btn btn-success mx-2">
                Мои заказы
                </a>
            </div>
        </div>
    );
};

export default UserCard;
