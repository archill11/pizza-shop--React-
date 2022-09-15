//@ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { Item } from "./types";

export const fethOrder = createAsyncThunk<Item[], string[]>('cart/fethOrder', async (args) => {
  try {
    const order = {
      list: args,
      user: args[0]._id
    }
    const { data } = await axios.post<Item[]>(`/orders`, order)
    return data;
  } catch (err) {
    console.log(err);
  }
})