import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, UserActionTypes, types, UpdateItemAsync} from './types';
import {User} from './namespace';

const initialState: UserState = {
  detail: null,
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    saveDetail: (state: UserState, action: PayloadAction<User.Detail>) => {
      state.detail = action.payload;
    },

    clearDetail: (state: UserState) => {
      state.detail = null;
    },

    updateDetail: (
      state: UserState,
      action: PayloadAction<User.UpdatePayload>,
    ) => {
      state.detail = state.detail ? {...state.detail, ...action.payload} : null;
    },
  },
});

export default slice.reducer;

export const userActions = {
  ...slice.actions,
  updateItemAsync: (payload: User.ReqUpdateDetail): UpdateItemAsync => ({
    type: types.UPDATE_ITEM,
    payload,
  }),

  fetchDetailAsync: (): UserActionTypes => ({
    type: types.FETCH_DETAIL,
    payload: {},
  }),

  removeItemAsync: (): UserActionTypes => ({
    type: types.REMOVE_ITEM,
    payload: {},
  }),
};
