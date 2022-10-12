import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: true}));
  } catch (e) {
    console.log(`error create task item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'task_action', loading: false}));
  }
}
