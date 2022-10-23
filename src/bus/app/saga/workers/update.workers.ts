import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {UpdateLanguageAsync} from '../../types';
import {apiApp} from '../../api';
import i18n from '@/i18n';

export function* updateLanguage(action: UpdateLanguageAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'language', loading: true}));

    const response = yield call(apiApp.updateLanguage, action.payload);

    i18n.changeLanguage(action.payload.language);
  } catch (e) {
    console.log(`error update app language worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'language', loading: false}));
  }
}
