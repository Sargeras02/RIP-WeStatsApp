import React, { useState, useEffect } from 'react';
import { api } from '../../api';
import { OrderInfo } from '../../api/WeStatsApiModel';

import OrderDataRow from '../../components/rows/OrderDataRow';

const OrdersDataPage: React.FC = () => {
    const [orders, setOrders] = useState<OrderInfo[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);

    // Функция для загрузки данных с сервера
    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await api.orders.ordersList();
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        fetchOrders();
    }, []);

    // Фильтрация заказов в соответствии с выбранной категорией
    const filteredOrders = orders.filter((order) => {
        if (selectedCategory === 'all') {
            return order.status === 'formed' || order.status === 'rejected' || order.status === 'completed';
        } else if (selectedCategory === 'awaiting_approval') {
            return order.status === 'formed';
        } else if (selectedCategory === 'rejected') {
            return order.status === 'rejected';
        } else if (selectedCategory === 'approved') {
            return order.status === 'completed';
        }
        return false;
    });

    const handleApprove = async (orderId: number) => {
        try {
            console.log(`Order ${orderId} approved`);
            await api.orders.ordersAcceptPartialUpdate(orderId.toString());
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                order.order_id === orderId ? { ...order, status: 'completed' } : order
                )
            );
        } catch (error) {
            console.error('Error processing approval:', error);
        }
    };
    
    const handleReject = async (orderId: number) => {
        try {
            console.log(`Order ${orderId} rejected`);
            await api.orders.ordersRejectPartialUpdate(orderId.toString());
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                order.order_id === orderId ? { ...order, status: 'rejected' } : order
                )
            );
        } catch (error) {
            console.error('Error processing rejection:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Управление заказами</h1>

            {/* Мини-меню с кнопками для выбора категории заказов */}
            <div className="btn-group my-3" role="group" aria-label="Order Categories"><div className="btn-group" role="group" aria-label="Order Categories">
                <button
                    type="button"
                    className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory('all')}>
                    Все
                </button>
                <button
                    type="button"
                    className={`btn ${selectedCategory === 'awaiting_approval' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory('awaiting_approval')}>
                    Ожидают подтверждения
                </button>
                <button
                    type="button"
                    className={`btn ${selectedCategory === 'rejected' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory('rejected')}>
                    Отклоненные
                </button>
                <button
                    type="button"
                    className={`btn ${selectedCategory === 'approved' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory('approved')}>
                    Одобренные
                </button>
            </div>
            </div>

            {/* Список заказов */}
            {loading ? (
                <p>Loading...</p>
            ) : filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (<OrderDataRow
                    key={order.order_id} order={order}
                    onApprove={() => handleApprove(order.order_id!)} onReject={() => handleReject(order.order_id!)}
                />
                ))
            ) : (
                <p>No orders to display</p>
            )}
        </div>
    );
};

export default OrdersDataPage;
