import { createSlice } from '@reduxjs/toolkit';

import { resetToDefault } from '../Reset/reset-action';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: 'all',
  reducers: {
    allTodos: (state, action) => {
      return action.payload;
    },
    activeTodos: (state, action) => {
      return action.payload;
    },
    completedTodos: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(resetToDefault, () => {
      return 'all';
    });
  },
});

export const { allTodos, activeTodos, completedTodos } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
