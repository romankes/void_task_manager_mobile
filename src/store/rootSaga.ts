import {all, call} from 'redux-saga/effects';

//watchers

import {watchApp} from '@/bus/app/saga/watchers';
import {watchUser} from '@/bus/user/saga/watchers';
import {watchAuth} from '@/bus/auth/saga/watchers';

function* rootSaga() {
  try {
    yield all([call(watchApp), call(watchUser), call(watchAuth)]);
  } catch (e) {
    console.error('error in root saga', e);
  }
}

export default rootSaga;
