import {put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {apiAuth} from '../../api';
import {authActions} from '../../slice';

export function* logout(): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'logout', loading: true}));

    yield call(apiAuth.logout);

    yield put(authActions.toggleLogged(false));
  } catch (e) {
    console.log(`error logout worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'logout', loading: false}));
  }
}
