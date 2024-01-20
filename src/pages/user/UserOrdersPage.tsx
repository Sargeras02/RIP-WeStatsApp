import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { api } from '../../api';
import { TotalOrderInfo } from '../../api/WeStatsApiModel';
import OrderInfoCard from '../../components/user/OrderInfoCard';

const UserOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<TotalOrderInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await api.userorders.userordersList();
        console.log(response.data)
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      {!loading && !orders.length && (
        <div>
          <h1>К сожалению, пока ничего не найдено :(</h1>
        </div>
      )}

      <Row xs={4} ms={4} className="g-10">
        {orders.map((order, index) => (
          <Col key={index}>
            <OrderInfoCard order={order} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserOrdersPage;
