import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { Profile } from "../../../api/WeStatsApiModel";

interface AuthState {
user: Profile | null;
}

const authSlice = createSlice({
    name: "authcredits",
    // в initialState мы указываем начальное состояние нашего глобального хранилища
    initialState: {
        user: null as Profile | null,
    } as AuthState,
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        setUserAuth(state, action: PayloadAction<Profile | null>) {
            console.log("Setting user:", action.payload);
            state.user = action.payload
        }
    }
})

export const { actions: authActions, reducer: authReducer } = authSlice