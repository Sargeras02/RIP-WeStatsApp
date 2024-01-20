import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { Measurement, MeasurementData, OrderInfo } from "../../../api/WeStatsApiModel";

interface CurrentOrderState {
    orderInfo: OrderInfo | null;
    cart: Measurement[] | null
}

const currentOrderSlice = createSlice({
    name: 'currentOrder',
    initialState: {
      orderInfo: null,
      cart: null,
    } as CurrentOrderState,
    reducers: {
        setCurrentOrder(state, action: PayloadAction<{ orderInfo: OrderInfo | null; cart: MeasurementData[] | null }>) {
            state.orderInfo = action.payload.orderInfo;
            state.cart = action.payload.cart;
        },
        initNew(state, action: PayloadAction<OrderInfo>) {
            state.orderInfo = action.payload;
            state.cart = [];
        },
        addToCart(state, action: PayloadAction<MeasurementData>) {
            if (state.cart) {
            state.cart.push(action.payload);
            }
        },
        updateOrderInfo(state, action: PayloadAction<OrderInfo>) {
            state.orderInfo = action.payload;
        },
        flush(state) {
            state.orderInfo = null;
            state.cart = null;
        },
    },
});
  
  export const { actions: currentOrderActions, reducer: currentOrderReducer } = currentOrderSlice;