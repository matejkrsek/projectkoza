import { createSlice } from '@reduxjs/toolkit';

const initialState = { dates: undefined, guests: '', search: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.dates = action.payload.dates;
      state.guests = action.payload.guests;
      state.search = action.payload.search;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
