//@ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fethCategoryes = createAsyncThunk<string[]>('categoryes/fethcategoryes', async () => {
  try {
    const { data } = await axios.get<string[]>(`${process.env.REACT_APP_API_URL2}/categoryes`)
    return data;
  } catch (err) {
    console.log(err);
  }
})