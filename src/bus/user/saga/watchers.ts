import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {fetchDetail, removeItem, updateItem} from './workers';

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchUpdateDetail(): SagaIterator {
  yield takeEvery(types.UPDATE_ITEM, updateItem);
}

function* watchRemoveItem(): SagaIterator {
  yield takeEvery(types.REMOVE_ITEM, removeItem);
}

export function* watchUser(): SagaIterator {
  yield all([
    call(watchFetchDetail),
    call(watchUpdateDetail),
    call(watchRemoveItem),
  ]);
}
