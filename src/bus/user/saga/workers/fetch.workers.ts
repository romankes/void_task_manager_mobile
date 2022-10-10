import {all, put, call} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {types} from '../../types';
import {apiUser} from '../../api';
import {AxiosResponse} from 'axios';
import {User} from '../../namespace';
import {userActions} from '../../slice';
import {authActions} from '@/bus/auth';

export function* fetchDetail(): SagaIterator {
  try {
    console.log('call');

    const response: AxiosResponse<User.ResFetchDetail> = yield call(
      apiUser.fetchDetail,
    );

    console.log(response.data);

    if (response.data) {
      yield all([
        put(userActions.saveDetail(response.data)),
        put(authActions.toggleLogged(true)),
      ]);
    }
  } catch (e) {
    console.log(`error fetch user detail worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_DETAIL});
  }
}
