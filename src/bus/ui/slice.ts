import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {UiState} from './types';
import type {Ui} from './namespace';

const initialState: UiState = {
  loaders: [],
  link: null,
};

const slice = createSlice({
  name: 'Ui',
  initialState,
  reducers: {
    toggleLoader: (state: UiState, action: PayloadAction<Ui.Loader>) => {
      const index = state.loaders.findIndex(
        l => l.name === action.payload.name,
      );
      if (index !== -1) {
        state.loaders[index].loading = action.payload.loading;
      } else {
        state.loaders = [...state.loaders, action.payload];
      }
    },
    updateLink: (state: UiState, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    clearLink: (state: UiState) => {
      state.link = null;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const uiActions = {
  // Change
  ...slice.actions,
  //Async
};
