import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import { TotalOrderInfo } from '../../api/WeStatsApiModel';
import { useAppDispatch } from '../../redux/store';
import { currentOrderActions } from '../../redux/store/cntOrder/slice';

const OrderInfoPage: React.FC = () => {
    const dispatcher = useAppDispatch();
    
    const { orderId } = useParams<{ orderId: string }>();
    const [orderInfo, setOrderInfo] = useState<TotalOrderInfo | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrderInfo = async () => {
            setLoading(true);
            try {
                const response = await api.orders.ordersRead(orderId!.toString());
                setOrderInfo(response.data);
            } catch (error) {
                console.error('Error fetching order information:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderInfo();
    }, [orderId]);

    const handlePay = async () => {
        setLoading(true);
        try {
            await api.orders.ordersFormatPartialUpdate(orderInfo!.order.order_id!.toString());
            dispatcher(currentOrderActions.flush())
            const response = await api.orders.ordersRead(orderInfo!.order.order_id!.toString())
            setOrderInfo(response.data)
        } catch (error) {
            console.error('Error processing payment:', error);
        } finally {
            setLoading(false)
        }
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await api.orders.ordersDeletePartialUpdate(orderInfo!.order.order_id!.toString());
            dispatcher(currentOrderActions.flush())
            const response = await api.orders.ordersRead(orderInfo!.order.order_id!.toString())
            setOrderInfo(response.data)
        } catch (error) {
            console.error('Error processing delete:', error);
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!orderInfo) {
        return <div>Заказ не найден</div>;
    }

    return (
        <div className="container mt-5">
            <h1>Информация о заказе</h1>
            <p>Статус: {orderInfo?.order.status}</p>
            {/* <p>Создатель: {orderInfo?.order.creator}</p> */}
            <p>Дата формирования: {orderInfo?.order.formation_date ? new Date(orderInfo?.order.formation_date!).toLocaleString() : '-'}</p>
            <p>Дата выноса решения: {orderInfo?.order.completion_date! ? new Date(orderInfo?.order.completion_date!).toLocaleString() : '-'}</p>
    
            {orderInfo.measurements.length > 0 && <h2>Заказанные показания</h2>}
            {orderInfo?.measurements.map((measurement) => (
                <div>
                    {/* <p>Станция: {measurement.weather_station}</p> */}
                    <p>Дата снятия: {new Date(measurement.created_date!).toLocaleString()}</p>
                    {orderInfo.order.status === 'completed' && (
                    <div><p>Температура: {measurement.temperature} по Цельсию</p>
                    <p>Влажность: {measurement.humidity}%</p>
                    <p>Скорость ветра: {measurement.wind_speed} м/с</p></div>)}
                    <hr />
                </div>
            ))}
    
            {orderInfo?.order.status === 'draft' && (
                <div className="mt-4">
                    {/* <button className="btn btn-primary ms-2" onClick={handleSave}>
                        Сохранить
                    </button> */}
                    <button className="btn btn-success ms-2" onClick={handlePay} disabled={loading}>
                        Оплатить
                    </button>
                    <button className="btn btn-danger ms-2" onClick={handleDelete} disabled={loading}>
                        Удалить
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderInfoPage;
