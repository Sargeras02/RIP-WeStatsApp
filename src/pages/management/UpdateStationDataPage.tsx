import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../api';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const UpdateStationDataPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  
  const { stationId } = useParams<{ stationId: string }>();
  
  useEffect(() => {
    const fetchStationData = async () => {
      if (stationId) {
        try {
          const response = await api.stations.stationsRead(stationId!);
          setValue('name', response.data.name);
          setValue('location', response.data.location);
          const dateObject = parseISO(response.data.open_date);
          const formattedDate = format(dateObject, "yyyy-MM-dd'T'HH:mm");
          setValue('open_date', formattedDate);
          setValue('description', response.data.description);
          setValue('status', response.data.status.toString());
          setValue('image_url', response.data.image_url);
        } catch (error) {
          console.error('Ошибка при загрузке данных станции для редактирования:', error);
        }
      }
    };

    fetchStationData();
  }, [stationId, setValue]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    setShowSuccess(false);

    try {
      const response = await api.stations.stationsUpdate(stationId!, data);
      console.log('Станция успешно обновлена:', response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error('Ошибка при обновлении станции:', error);
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить станцию?')) {
      try {
        await api.stations.stationsDelete(stationId!);
        console.log('Станция успешно удалена');
      } catch (error) {
        console.error('Ошибка при удалении станции:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Редактировать данные Станции</h1>
      {showSuccess && (
        <div className="alert alert-success" role="alert">
          Станция обновлена.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Название станции:
          </label>
          <input type="text" className="form-control" {...register('name')} id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Местоположение:
          </label>
          <input type="text" className="form-control" {...register('location')} id="location" />
        </div>
        <div className="mb-3">
          <label htmlFor="open_date" className="form-label">
            Дата открытия:
          </label>
          <input type="datetime-local" className="form-control" {...register('open_date')} id="open_date" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание:
          </label>
          <textarea className="form-control" {...register('description')} id="description" rows={4}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Статус:
          </label>
          <select className="form-select" {...register('status')} id="status">
            <option value="true">Активная</option>
            <option value="false">Неактивная</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">
            URL изображения:
          </label>
          <input type="text" className="form-control" {...register('image_url')} id="image_url" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Обновить станцию
        </button>
        <button type="button" className="btn btn-danger ms-2" onClick={onDelete} disabled={loading}>
          Удалить станцию
        </button>
      </form>
    </div>
  );
};

export default UpdateStationDataPage;
