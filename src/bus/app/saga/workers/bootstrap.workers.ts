import {all, put, select, take} from 'redux-saga/effects';
import {appActions, appSelectors} from '@/bus/app';
import {SagaIterator} from 'redux-saga';

import {types as authTypes} from '@/bus/auth/types';

import {userActions} from '@/bus/user';
import {types as userTypes} from '@/bus/user/types';

export function* bootstrap(): SagaIterator {
  try {
    yield all([put(userActions.fetchDetailAsync())]);

    yield all([take(userTypes.END_FETCH_DETAIL)]);
  } catch (e) {
    console.log(`error app bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleInitialized(true));
  }
}
