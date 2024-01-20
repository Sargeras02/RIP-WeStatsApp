import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { api } from '../api';
import { WeatherStation } from '../api/WeStatsApiModel';

const NewMeasurementPage: React.FC = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const [stations, setStations] = useState<WeatherStation[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchStations = async () => {
        setLoading(true);
        try {
            const response = await api.stations.stationsList();
            setStations(response.data);
        } catch (error) {
            console.error('Error fetching stations:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchStations();
    }, []);

    const onSubmit = async (data: any) => {
        setShowSuccess(false)
        console.log(data);
        try {
            const response = await api.measurements.measurementsCreate(data);
            console.log('Измерение успешно создано:', response.data);
            setShowSuccess(true)
        } catch (error) {
            console.error('Ошибка при создании измерения:', error);
        }
    };

    return (
        <div className="container mt-5">
        <h1>Добавить показания</h1>
        {showSuccess && (
        <div className="alert alert-success" role="alert">
            Показания добавлены.
        </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="weather_station" className="form-label">
              Выберите станцию:
            </label>
            <select className="form-select" {...register('weather_station')} id="weather_station">
              {stations.map((station: any) => (
                <option key={station.id} value={station.station_id}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="temperature" className="form-label">
              Температура:
            </label>
            <input type="number" className="form-control" {...register('temperature', { min: -100, max: 100 })} id="temperature" step="0.01" placeholder="0.00" />
          </div>
          <div className="mb-3">
            <label htmlFor="humidity" className="form-label">
              Влажность:
            </label>
            <input type="number" className="form-control" {...register('humidity', { min: 0, max: 100 })} id="humidity" step="0.01" placeholder="0.00" />
          </div>
          <div className="mb-3">
            <label htmlFor="wind_speed" className="form-label">
              Скорость ветра:
            </label>
            <input type="number" className="form-control" {...register('wind_speed', { min: 0, max: 200 })} id="wind_speed" step="0.01" placeholder="0.00" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            Сохранить и добавить
          </button>
        </form>
      </div>
    );
};

export default NewMeasurementPage;
