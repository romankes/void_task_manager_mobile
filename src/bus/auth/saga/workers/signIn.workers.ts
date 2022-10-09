import {AxiosResponse} from 'axios';
import {put, call, take} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {apiAuth} from '../../api';
import {Auth} from '../../namespace';

import {SignInAsync, types} from '../../types';
import {types as userTypes} from '@/bus/user/types';

import {uiActions} from '@/bus/ui';
import {authActions} from '../../slice';
import {userActions} from '@/bus/user';

export function* signIn(action: SignInAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: true}));

    const response: AxiosResponse<Auth.ResSignIn> = yield call(
      apiAuth.signIn,
      action.payload,
    );

    if (response.headers['set-cookie']?.length) {
      yield put(authActions.toggleLogged(false));

      yield put(userActions.fetchDetailAsync());
      yield take(userTypes.END_FETCH_DETAIL);
    }
  } catch (e) {
    console.log(`error sign in worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: false}));
  }
}
