import { createSlice } from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "data",
    // в initialState мы указываем начальное состояние нашего глобального хранилища
    initialState: {
        data:  [
            {
                "id": 1,
                "name": "Температура",
                "category": {
                    "id": 4,
                    "name": "Воздух"
                }
            },
            {
                "id": 2,
                "name": "Влажность",
                "category": {
                    "id": 4,
                    "name": "Воздух"
                }
            },
        ],
        сountCart: 0,
    },
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        setData(state, {payload}) {
            state.data = payload
        },
        addCount(state) {  // добавляем животного
            state.сountCart += 1
        },
        clearCount(state) {  // обнуляем количество животных
            state.сountCart = 0
        }
    }
})

export const { actions: dataActions, reducer: dataReducers } = dataSlice