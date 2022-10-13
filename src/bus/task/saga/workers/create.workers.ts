import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';
import {apiTask} from '../../api';
import {AxiosResponse} from 'axios';
import {Task} from '../../namespace';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: true}));

    const response: AxiosResponse<Task.ResCreateItem> = yield call(
      apiTask.createItem,
      action.payload,
    );

    console.log(response.data);
  } catch (e) {
    console.log(`error create task item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: false}));
  }
}
