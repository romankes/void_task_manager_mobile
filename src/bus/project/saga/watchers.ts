import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';

import {createItem, fetchDetail, fetchItems, updateItem} from './workers';

function* watchFetchItems(): SagaIterator {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
}

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchCreateItem(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

function* watchUpdateItem(): SagaIterator {
  yield takeEvery(types.UPDATE_ITEM, updateItem);
}

export function* watchProject(): SagaIterator {
  yield all([
    call(watchFetchDetail),
    call(watchFetchItems),
    call(watchCreateItem),
    call(watchUpdateItem),
  ]);
}
