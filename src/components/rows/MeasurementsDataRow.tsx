import React from 'react';
import { api } from '../../api';
import { Measurement, WeatherStation } from '../../api/WeStatsApiModel';
import { useAppDispatch } from '../../redux/store';
import { currentOrderActions } from '../../redux/store/cntOrder/slice';
import { useCurrentOrder } from '../../redux/store/cntOrder/selector';
import { useUser } from '../../redux/store/auth/selector';

interface MeasurementsDataRowProps {
  measurement: Measurement;
  stations: WeatherStation[];
}

const MeasurementsDataRow: React.FC<MeasurementsDataRowProps> = ({ measurement, stations }) => {
  const user = useUser();
  const currentOrder = useCurrentOrder();
  const formattedDate = new Date(measurement.created_date!).toLocaleString();
  const dispatch = useAppDispatch();

  const isMeasurementInCart = currentOrder.cart?.some(
    (cartMeasurement) => cartMeasurement.measurement_id === measurement.measurement_id
  );
  const stationName = stations.find((station) => station.station_id === measurement.weather_station)?.name;

  const handleAddToCart = async () => {
    try {
      await api.orders.ordersAddItemCreate(currentOrder.orderInfo!.order_id!.toString(),
      {
        "measurement_id": measurement.measurement_id?.toString()
      })
    } catch {
      console.log('Unable to add')
    }
    dispatch(currentOrderActions.addToCart(measurement));
  };

  return (
    <tr>
      <td>{stationName}</td>
      <td>{formattedDate}</td>
      <td>
        {user?.role === 'just_user' && currentOrder.orderInfo && !isMeasurementInCart && <button className="btn btn-success" onClick={handleAddToCart}>Добавить</button>}
        {user?.role === 'just_user' && currentOrder.orderInfo && isMeasurementInCart && <span>Добавлено</span>}
        {user?.role === 'just_user' && !currentOrder.orderInfo && <a href='/profile' className='btn btn-primary'>Новый заказ</a>}
      </td>
    </tr>
  );
};

export default MeasurementsDataRow;
