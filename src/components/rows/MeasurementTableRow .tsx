import React from 'react';
import { api } from '../../api';
import { Measurement, WeatherStation } from '../../api/WeStatsApiModel';
import { Button } from 'react-bootstrap';

interface MeasurementsTableRowProps {
  measurement: Measurement;
  stations: WeatherStation[];
}

const MeasurementsTableRow: React.FC<MeasurementsTableRowProps> = ({ measurement, stations }) => {
    const station = stations.find((station) => station.station_id === measurement.weather_station);
    const stationName = station?.name;
    const stationLocation = station?.location;
    const formattedDate = new Date(measurement.created_date!).toLocaleString();
    const { measurement_id, temperature, humidity, wind_speed } = measurement;

    const onDelete = async () => {
        try {
            await api.measurements.measurementsDelete(measurement_id!.toString());
        } catch {
            console.log('Unable to delete measure')
        }
    }

    return (
        <tr>
            <td>{stationName}</td>
            <td>{stationLocation}</td>
            <td>{formattedDate}</td>
            <td>{temperature}</td>
            <td>{humidity}</td>
            <td>{wind_speed}</td>
            <td><Button onClick={onDelete}>Удалить</Button></td>
        </tr>
    );
};

export default MeasurementsTableRow;
