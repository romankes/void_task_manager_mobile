import {App} from '../app';
import {User} from './namespace';

export enum types {
  FETCH_DETAIL = 'USER/FETCH_DETAIL',

  UPDATE_ITEM = 'USER/UPDATE_ITEM',

  REMOVE_ITEM = 'USER/REMOVE_ITEM',

  END_FETCH_DETAIL = 'USER/END_FETCH_DETAIL',
}

//STATE

export type UserState = {
  detail: User.Detail | null;
};

export type FetchDetailAsync = App.BaseAction<typeof types.FETCH_DETAIL>;
export type UpdateItemAsync = App.BaseAction<
  typeof types.UPDATE_ITEM,
  User.ReqUpdateDetail
>;
export type RemoveItemAsync = App.BaseAction<typeof types.REMOVE_ITEM>;

export type UserActionTypes =
  | FetchDetailAsync
  | UpdateItemAsync
  | RemoveItemAsync;
