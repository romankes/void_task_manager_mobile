import {App} from '../app';
import {Project} from './namespace';

export enum types {
  FETCH_ITEMS = 'PROJECT/FETCH_ITEMS',
  FETCH_DETAIL = 'PROJECT/FETCH_DETAIL',

  CREATE_ITEM = 'PROJECT/CREATE_ITEM',
  UPDATE_ITEM = 'PROJECT/UPDATE_ITEM',
}

export type ProjectState = {
  items: Project.Item[];
  detail: Project.Detail | null;

  currentPage: number;
  hasMore: boolean;
};

export type FetchItemsAsync = App.BaseAction<
  typeof types.FETCH_ITEMS,
  Project.ReqFetchItems
>;

export type FetchDetailAsync = App.BaseAction<
  typeof types.FETCH_DETAIL,
  Project.ReqFetchDetail
>;

export type CreateItemAsync = App.BaseAction<
  typeof types.CREATE_ITEM,
  Project.ReqCreateItem
>;

export type UpdateItemAsync = App.BaseAction<
  typeof types.UPDATE_ITEM,
  Project.ReqUpdateItem
>;

export type ProjectActionTypes =
  | FetchDetailAsync
  | FetchItemsAsync
  | CreateItemAsync
  | UpdateItemAsync;
