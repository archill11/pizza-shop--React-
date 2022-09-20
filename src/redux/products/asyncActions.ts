import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { Item } from "./types";

export const fethProducts = createAsyncThunk<Item[], string[]>('products/fetchProducts', async ([l, s, c], {rejectWithValue}) => {
  try {
    const { data } = await axios.get<Item[]>(`/products?page=1&limit=${l}${s}${c}` )
    return data;
  } catch (err ) {
    let error = (err as Error).message
    alert('Ошибка при запросе данных')
    return rejectWithValue(error)
  }  
})