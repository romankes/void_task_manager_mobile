import {all, call} from 'redux-saga/effects';

//watchers

import {watchApp} from '@/bus/app/saga/watchers';

function* rootSaga() {
  try {
    yield all([call(watchApp)]);
  } catch (e) {
    console.error('error in root saga', e);
  }
}

export default rootSaga;
