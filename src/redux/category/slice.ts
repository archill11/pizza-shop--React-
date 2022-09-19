import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fethCategoryes } from "./asyncActions";
import { filterSliceState } from "./types";





const initialState: filterSliceState = { category: 0, sortProperty: 'rating', allCategoryes: [] }

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,

  reducers: {
    setCategoryVal(state, action: PayloadAction<number>) {
      state.category = action.payload
    },
    setSortingVal(state, action: PayloadAction<'rating' | "price" | "priceD" | string>) {
      state.sortProperty = action.payload 
    },
    setQueryParams(state, action: PayloadAction<filterSliceState>) {
      state.category = Number(action.payload.category) 
      state.sortProperty = action.payload.sortProperty 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fethCategoryes.pending, (state) => {
      state.allCategoryes = []
    })
    builder.addCase(fethCategoryes.fulfilled, (state, action) => {
      state.allCategoryes = action.payload
    })
    builder.addCase(fethCategoryes.rejected, (state) => {
      state.allCategoryes = []
      alert('Ошибка при запросе данных')
    })
  }
})

export const { setCategoryVal, setSortingVal, setQueryParams } = filterSlice.actions;
export default filterSlice.reducer;