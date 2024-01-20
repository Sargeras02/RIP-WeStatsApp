import React from 'react';
import { TotalOrderInfo } from '../../api/WeStatsApiModel';

interface OrderInfoCardProps {
  order: TotalOrderInfo;
}

const OrderInfoCard: React.FC<OrderInfoCardProps> = ({ order }) => {
    const getStatusColor = (status: string): string => {
        switch (status) {
          case 'completed':
            return 'green';
          case 'formed':
          case 'draft':
            return 'yellow';
          case 'rejected':
          case 'deleted':
            return 'red';
          default:
            return 'black';
        }
      };
      
    return (
        <div className="card my-3">
          <div className="card-body">
              <h5 className="card-title">Информация о заказе #{order.order.order_id}</h5>
              <p className="card-text" style={{ color: getStatusColor(order.order.status!.toString()) }}>
                  Статус: {order.order.status}
              </p>
              <p className="card-text">Дата создания: {new Date(order.order.formation_date!.toString()).toLocaleString()}</p>
              <a href={`/profile/orders/${order.order.order_id}`} className="btn btn-primary">Подробнее</a>
          </div>
        </div>
    );
};

export default OrderInfoCard;