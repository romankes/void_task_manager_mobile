import {all, takeEvery, call, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {types} from '../types';

import {bootstrap, updateLanguage} from './workers';

function* watchBootstrap(): SagaIterator {
  yield takeLatest(types.BOOTSTRAP, bootstrap);
}

function* watchUpdateLanguage(): SagaIterator {
  yield takeEvery(types.UPDATE_LANGUAGE, updateLanguage);
}

export function* watchApp(): SagaIterator {
  yield all([call(watchBootstrap), call(watchUpdateLanguage)]);
}
