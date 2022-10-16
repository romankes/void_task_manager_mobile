import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {UpdateItemAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Task} from '../../namespace';
import {apiTask} from '../../api';
import {taskActions} from '../../slice';

export function* updateItem(action: UpdateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: true}));

    const response: AxiosResponse<Task.ResUpdateItem> = yield call(
      apiTask.updateItem,
      action.payload,
    );

    if (response.data) {
      yield put(taskActions.updateItem(response.data));
    }
  } catch (e) {
    console.log(`error update task item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: false}));
  }
}
