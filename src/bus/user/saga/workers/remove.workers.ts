import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {RemoveItemAsync} from '../../types';
import {apiUser} from '../../api';
import {userActions} from '../../slice';
import {authActions} from '@/bus/auth';

export function* removeItem(action: RemoveItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'user_action', loading: true}));

    const response = yield call(apiUser.removeItem);

    yield all([
      put(userActions.clearDetail()),
      put(authActions.toggleLogged(false)),
    ]);
  } catch (e) {
    console.log(`error remove user item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'user_action', loading: false}));
  }
}
