import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';
import {apiProject} from '../../api';
import {AxiosResponse} from 'axios';
import {Project} from '../../namespace';
import {projectActions} from '../../slice';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: true}));

    const response: AxiosResponse<Project.ResCreateItem> = yield call(
      apiProject.createItem,
      action.payload,
    );

    if (response.data) {
      yield put(projectActions.createItem(response.data));
    }
  } catch (e) {
    console.log(`error create project item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project_action', loading: false}));
  }
}
