import React from 'react';
import { Card } from 'react-bootstrap';

import { WeatherStation } from '../api/WeStatsApiModel';
import { useUser } from '../redux/store/auth/selector';

//import '././styles/StationInfoCard.css';

interface MeteoProps {
    station: WeatherStation
}

const StationInfoCard: React.FC<MeteoProps> = ({ station }) => {
  const user = useUser();

  return (
    <Card className="station-card mt-3">
      <Card.Body>
        <div className="textStyle">
          <Card.Title>{station.name}</Card.Title>
        </div>
        <a href={`/RIP-WeStatsApp/stations/${station.station_id}`} className="btn btn-primary">Подробнее</a>
        {user && user.role === 'Админ' && (
          <a href={`/RIP-WeStatsApp/admin/editstation/${station.station_id}`} className="btn btn-secondary my-2">
            Изменить
          </a>
        )}
      </Card.Body>
    </Card>
  );
};

export default StationInfoCard;