import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {RemoveItemAsync} from '../../types';
import {apiProject} from '../../api';
import {AxiosResponse} from 'axios';
import {Project, projectActions} from '../..';
import {goBack} from '@/navigation';

export function* removeItem(action: RemoveItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: true}));

    const response: AxiosResponse<Project.ResRemoveItem> = yield call(
      apiProject.removeItem,
      action.payload,
    );

    yield put(projectActions.removeItem(action.payload));

    goBack();
  } catch (e) {
    console.log(`error remove project item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: false}));
  }
}
