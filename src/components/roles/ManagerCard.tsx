import React from 'react';

const ManagerCard: React.FC = () => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title"><strong>Роль:</strong> Менеджер</h5>
        <p className="card-text">Дополнительная информация о менеджере.</p>
        <a href="/admin/orders" className="btn btn-primary mx-2">
          Заказы
        </a>
      </div>
    </div>
  );
};

export default ManagerCard;
