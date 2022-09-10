import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "./types";

export const fethProducts = createAsyncThunk<Item[], string[]>('products/fetchProducts', async ([l, c, s]) => {
    //@ts-ignore
    const { data } = await axios.get<Item[]>(`https://6316f07e82797be77feea866.mockapi.io/items?page=1&limit=${l}${s}${c}` )
    return data;
})