import React from 'react';
import { OrderInfo } from '../../api/WeStatsApiModel';

interface OrderDataRowProps {
    order: OrderInfo;
    onApprove: () => void;
    onReject: () => void;
}

const OrderDataRow: React.FC<OrderDataRowProps> = ({ order, onApprove, onReject }) => {
    return (
        <div className="row mb-3">
            <div className="col-md-6">
                <h4>Заказ №{order.order_id}</h4>
                <p>Статус: {order.status}</p>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-success me-2"
                        onClick={() => onApprove()}
                        disabled={order.status !== 'formed'}>
                        Одобрить
                    </button>
                    <button
                        className="btn btn-danger me-2"
                        onClick={() => onReject()}
                        disabled={order.status !== 'formed'}>
                        Отклонить
                    </button>
                    <a href={`/profile/orders/${order.order_id}`} className="btn btn-primary ms-2">Детали</a>
                </div>
            </div>
        </div>
    );
};

export default OrderDataRow;
