import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import MeasurementsDataRow from '../components/rows/MeasurementsDataRow';
import { api } from '../api';
import { Measurement, WeatherStation } from '../api/WeStatsApiModel';

const MeasurementsPage: React.FC = () => {
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

  // Загрузка данных при монтировании компонента
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
            <th>Дата снятия</th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((measurement) => (
            <MeasurementsDataRow key={measurement.measurement_id} measurement={measurement} stations={stations} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MeasurementsPage;
