import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Project} from '../../namespace';
import {apiProject} from '../../api';
import {projectActions} from '../../slice';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project', loading: true}));

    const response: AxiosResponse<Project.ResFetchItems> = yield call(
      apiProject.fetchItems,
      action.payload,
    );

    if (response.data) {
      yield put(projectActions.saveItems(response.data));
    }
  } catch (e) {
    console.log(`error fetch project items worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project', loading: false}));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project', loading: true}));

    const response: AxiosResponse<Project.ResFetchDetail> = yield call(
      apiProject.fetchDetail,
      action.payload,
    );

    if (response.data) {
      yield put(projectActions.saveDetail(response.data));
    }
  } catch (e) {
    console.log(`error fetch project detail worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project', loading: false}));
  }
}
