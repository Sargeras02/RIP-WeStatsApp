import React from 'react';

const AdminCard: React.FC = () => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title"><strong>Роль:</strong> Администратор</h5>
        <p className="card-text">Дополнительная информация об администраторе.</p>
        <a href="/RIP-WeStatsApp/admin/orders" className="btn btn-primary mx-2">
          Заказы
        </a>
        <a href="/RIP-WeStatsApp/admin/addstation" className="btn btn-primary mx-2">
          Добавить станцию
        </a>
        <a href="/RIP-WeStatsApp/stations" className="btn btn-primary mx-2">
          Управление станциями
        </a>
        <a href="/RIP-WeStatsApp/admin/editmeasurements" className="btn btn-primary mx-2">
          Управление измерениями
        </a>
        <a href="/RIP-WeStatsApp/admin/perms" className="btn btn-primary mx-2">
          Управление правами
        </a>
      </div>
    </div>
  );
};

export default AdminCard;
