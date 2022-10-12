import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';
import {apiTask} from '../../api';
import {AxiosResponse} from 'axios';
import {Task} from '../../namespace';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'task', loading: true}));

    const response: AxiosResponse<Task.ResFetchItems> = yield call(
      apiTask.fetchItems,
      action.payload,
    );

    console.log(response.data);
  } catch (e) {
    console.log(`error fetch task items worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'task', loading: false}));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'task', loading: true}));

    const response: AxiosResponse<Task.ResFetchDetail> = yield call(
      apiTask.fetchDetail,
      action.payload,
    );

    console.log(response.data);
  } catch (e) {
    console.log(`error fetch task detail worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'task', loading: false}));
  }
}
