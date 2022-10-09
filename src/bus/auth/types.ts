import {App} from '../app';
import {Auth} from './namespace';

export enum types {
  SIGN_IN = 'AUTH/SIGN_IN',
  SIGN_UP = 'AUTH/SIGN_UP',
  LOGOUT = 'AUTH/LOGOUT',
}

//STATE

export type AuthState = {
  logged: boolean;
};

//ASYNC

export type SignInAsync = App.BaseAction<typeof types.SIGN_IN, Auth.ReqSignIn>;
export type SignUpAsync = App.BaseAction<typeof types.SIGN_UP, Auth.ReqSignUp>;

export type LogoutAsync = App.BaseAction<typeof types.LOGOUT>;

export type AuthActionTypes = SignInAsync | SignUpAsync | LogoutAsync;
