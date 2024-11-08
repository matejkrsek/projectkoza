import { configureStore } from '@reduxjs/toolkit';

import listingsReducer from './listings/listingsSlice';
import filtersReducer from './listings/filtersSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    filters: filtersReducer,
  },
});
