import {dataActions, useData, useCount} from '../store/data'
import {useAppDispatch} from "../store";

export const Lab6List = () => {
    const dispatch = useAppDispatch()

    const count = useCount()
    const data = useData()

    return (
        <div>
            <div>Запросить параметры воздуха: {count}</div>
            {
                data.map((good) =>
                    <div key={good.id}>
                        <p>
                            {good.name}
                        </p>
                        <p>
                            Категория - {good.category.name}
                        </p>
                        <button
                            onClick={() => {
                                dispatch(dataActions.addCount())
                            }}
                        >
                            Добавить
                        </button>
                    </div>
                )
            }
            <button 
                onClick={() => {
                    dispatch(dataActions.clearCount())
                }}
            >
                Обнулить
            </button>
        </div>
    )
}

export default Lab6List;