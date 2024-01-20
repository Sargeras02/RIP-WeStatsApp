import React from 'react';
import { Card } from 'react-bootstrap';

import { WeatherStation } from '../api/WeStatsApiModel';

//import '././styles/StationInfoCard.css';

interface MeteoProps {
    station: WeatherStation
}

const StationInfoCard: React.FC<MeteoProps> = ({ station }) => {
  return (
    <Card className="station-card mt-3">
      <Card.Body>
        <div className="textStyle">
          <Card.Title>{station.name}</Card.Title>
          {/* Другие поля */}
        </div>
        <a href={`/stations/${station.station_id}`} className="btn btn-primary">Подробнее</a>
      </Card.Body>
    </Card>
  );
};

export default StationInfoCard;