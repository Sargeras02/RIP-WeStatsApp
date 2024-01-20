import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../api';


const NewStationPage: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true)
    setShowSuccess(false);
    console.log(data);

    try {
      const response = await api.stations.stationsCreate(data);
      console.log('Станция успешно создана:', response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error('Ошибка при создании станции:', error);
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="container mt-5">
      <h1>New Weather Station</h1>
      {showSuccess && (
        <div className="alert alert-success" role="alert">
          Станция добавлена.
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
          Создать станцию
        </button>
      </form>
    </div>
  );
};

export default NewStationPage;
