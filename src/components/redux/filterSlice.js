import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducer: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const getFilter = state => state.filter;

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;