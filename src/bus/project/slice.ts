import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {types, ProjectState, ProjectActionTypes} from './types';
import {Project} from './namespace';

const initialState: ProjectState = {
  items: [],
  detail: null,

  hasMore: false,
  currentPage: 1,
};

const slice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    saveItems: (
      state: ProjectState,
      action: PayloadAction<Project.ResFetchItems>,
    ) => {
      state.items = action.payload;
    },

    saveDetail: (
      state: ProjectState,
      action: PayloadAction<Project.ResFetchDetail>,
    ) => {
      state.detail = action.payload;
    },
    clearDetail: (state: ProjectState) => {},

    createItem: (
      state: ProjectState,
      action: PayloadAction<Project.ResCreateItem>,
    ) => {},
    updateItem: (
      state: ProjectState,
      action: PayloadAction<Project.ResUpdateItem>,
    ) => {},
  },
});

export default slice.reducer;

export const projectActions = {
  ...slice.actions,
  fetchItemsAsync: (payload: Project.ReqFetchItems): ProjectActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Project.ReqFetchDetail): ProjectActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),

  createItemAsync: (payload: Project.ReqCreateItem): ProjectActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  updateItemAsync: (payload: Project.ReqUpdateItem): ProjectActionTypes => ({
    type: types.UPDATE_ITEM,
    payload,
  }),
};
