import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.project.items;
export const getDetail = (state: RootState) => state.project.detail;

export const getCurrentPage = (state: RootState) => state.project.currentPage;
export const getHasMore = (state: RootState) => state.project.hasMore;
