import React from 'react';

const MeteorologistCard: React.FC = () => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title"><strong>Роль:</strong> Метеоролог</h5>
        <p className="card-text">Дополнительная информация о метеорологе.</p>
        <a href="/measurements" className="btn btn-primary mx-2">
          Добавленные показания
        </a>
        <a href="/uploadmeasure" className="btn btn-success mx-2">
          Добавить показания
        </a>
      </div>
    </div>
  );
};

export default MeteorologistCard;
