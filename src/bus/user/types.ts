import {App} from '../app';
import {User} from './namespace';

export enum types {
  FETCH_DETAIL = 'USER/FETCH_DETAIL',

  UPDATE_DETAIL = 'USER/UPDATE_DETAIL',

  END_FETCH_DETAIL = 'USER/END_FETCH_DETAIL',
}

//STATE

export type UserState = {
  detail: User.Detail | null;
};

export type FetchDetailAsync = App.BaseAction<typeof types.FETCH_DETAIL>;
export type UpdateDetailAsync = App.BaseAction<
  typeof types.UPDATE_DETAIL,
  User.ReqUpdateDetail
>;

export type UserActionTypes = FetchDetailAsync | UpdateDetailAsync;
