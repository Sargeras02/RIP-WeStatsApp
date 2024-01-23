import { useSelector } from "react-redux";
import { RootState } from "../types";

export const useData = () => useSelector((state: RootState) => state.data.data)
export const useCount = () => useSelector((state: RootState) => state.data.сountCart)