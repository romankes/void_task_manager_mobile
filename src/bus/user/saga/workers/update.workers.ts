// import {navigate, Routes} from '@/navigation';
import {AxiosResponse} from 'axios';
import {SagaIterator} from 'redux-saga';
import {all, call, put} from 'redux-saga/effects';
import {apiUser} from '../../api';
import {User} from '../../namespace';
import {UpdateItemAsync} from '../../types';

export function* updateItem(action: UpdateItemAsync): SagaIterator {
  try {
    const response: AxiosResponse<User.Detail> = yield call(
      apiUser.updateItem,
      action.payload,
    );

    // navigate(Routes.TABS_NAVIGATOR);
  } catch (e) {
    console.log(`update user detail worker ${e}`);
  } finally {
  }
}
