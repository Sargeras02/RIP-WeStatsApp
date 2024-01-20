import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { OrderInfo, Measurement } from '../../../api/WeStatsApiModel';

export const useCurrentOrder = () => {
  return useSelector((state: RootState) => ({
    orderInfo: state.currentOrder.orderInfo,
    cart: state.currentOrder.cart,
  }));
};

export const selectOrderInfo = (state: RootState): OrderInfo | null => state.currentOrder.orderInfo;

export const selectCart = (state: RootState): Measurement[] | null => state.currentOrder.cart;
