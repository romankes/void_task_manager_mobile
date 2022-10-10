import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {UpdateItemAsync} from '../../types';
import {apiProject} from '../../api';
import {AxiosResponse} from 'axios';
import {Project} from '../../namespace';
import {projectActions} from '../../slice';

export function* updateItem(action: UpdateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: true}));

    const response: AxiosResponse<Project.ResUpdateItem> = yield call(
      apiProject.updateItem,
      action.payload,
    );

    if (response.data) {
      yield put(projectActions.updateItem(response.data));
    }
  } catch (e) {
    console.log(`error update project item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: false}));
  }
}
