import {App} from '../app';
import {Task} from './namespace';

export enum types {
  FETCH_ITEMS = 'TASK/FETCH_ITEMS',
  FETCH_DETAIL = 'TASK/FETCH_DETAIL',

  CREATE_ITEM = 'TASK/CREATE_ITEM',
  UPDATE_ITEM = 'TASK/UPDATE_ITEM',
}

export type TaskState = {
  items: [string, Task.Item[]][];
  detail: Task.Detail | null;

  currentPage: number;
  hasMore: boolean;
};

export type FetchItemsAsync = App.BaseAction<
  typeof types.FETCH_ITEMS,
  Task.ReqFetchItems
>;
export type FetchDetailAsync = App.BaseAction<
  typeof types.FETCH_DETAIL,
  Task.ReqFetchDetail
>;
export type CreateItemAsync = App.BaseAction<
  typeof types.CREATE_ITEM,
  Task.ReqCreateItem
>;
export type UpdateItemAsync = App.BaseAction<
  typeof types.UPDATE_ITEM,
  Task.ReqUpdateItem
>;

export type TaskActionTypes =
  | FetchDetailAsync
  | FetchItemsAsync
  | CreateItemAsync
  | UpdateItemAsync;
