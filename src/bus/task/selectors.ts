import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.task.items;
export const getDetail = (state: RootState) => state.task.detail;

export const getCurrentPage = (state: RootState) => state.task.currentPage;
export const getHasMore = (state: RootState) => state.task.hasMore;
