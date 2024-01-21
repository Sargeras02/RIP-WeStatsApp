import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { api } from '../../api';
import { Measurement, WeatherStation } from '../../api/WeStatsApiModel';
import MeasurementsTableRow from '../../components/rows/MeasurementTableRow ';

const EditMeasurementsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [stations, setStations] = useState<WeatherStation[]>([]);

  const fetchStations = async () => {
      try {
        setLoading(true);
        const response = await api.stations.stationsList();
        setStations(response.data);
      } catch (error) {
        console.error('Ошибка при получении станций:', error);
      } finally {
        setLoading(false);
      }
    };

  // Функция для загрузки данных с сервера
  const fetchMeasurements = async () => {
        try {
            setLoading(true);
            const response = await api.measurements.measurementsList(); // Замените на ваш реальный метод получения измерений
            setMeasurements(response.data);
        } catch (error) {
            console.error('Error fetching measurements:', error);
        } finally {
            setLoading(false);
        }
  };

  useEffect(() => {
    fetchMeasurements();
    fetchStations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Измерения</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Станция</th>
            <th>Город</th>
            <th>Дата снятия</th>
            <td>Температура</td>
            <td>Влажность</td>
            <td>Скорость ветра</td>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement) => (
            <MeasurementsTableRow key={measurement.measurement_id} measurement={measurement} stations={stations} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EditMeasurementsPage;
