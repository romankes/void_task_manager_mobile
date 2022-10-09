import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthState, types, AuthActionTypes} from './types';
import {Auth} from './namespace';

const initialState: AuthState = {
  logged: false,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    toggleLogged: (state: AuthState, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    },
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,

  signInAsync: (payload: Auth.ReqSignIn): AuthActionTypes => ({
    type: types.SIGN_IN,
    payload,
  }),
  signUpAsync: (payload: Auth.ReqSignUp): AuthActionTypes => ({
    type: types.SIGN_UP,
    payload,
  }),
  logoutAsync: (): AuthActionTypes => ({
    type: types.LOGOUT,
    payload: {},
  }),
};
