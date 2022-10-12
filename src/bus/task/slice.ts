import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TaskActionTypes, TaskState, types} from './types';
import {Task} from './namespace';

const initialState: TaskState = {
  items: [],
  detail: null,

  currentPage: 1,
  hasMore: false,
};

const slice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    saveItems: (
      state: TaskState,
      action: PayloadAction<Task.ResFetchItems>,
    ) => {
      state.items = action.payload;
    },

    saveDetail: (
      state: TaskState,
      action: PayloadAction<Task.ResFetchDetail>,
    ) => {
      state.detail = action.payload;
    },
    clearDetail: (state: TaskState) => {},

    createItem: (
      state: TaskState,
      action: PayloadAction<Task.ResCreateItem>,
    ) => {},
    updateItem: (
      state: TaskState,
      action: PayloadAction<Task.ResUpdateItem>,
    ) => {},
  },
});

export default slice.reducer;

export const taskActions = {
  ...slice.actions,
  fetchItemsAsync: (payload: Task.ReqFetchItems): TaskActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Task.ReqFetchDetail): TaskActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  createItemAsync: (payload: Task.ReqCreateItem): TaskActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  updateItemAsync: (payload: Task.ReqUpdateItem): TaskActionTypes => ({
    type: types.UPDATE_ITEM,
    payload,
  }),
};
