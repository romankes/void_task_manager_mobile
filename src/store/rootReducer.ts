import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {AuthState} from '@/bus/auth/types';
import {UserState} from '@/bus/user/types';
import {ProjectState} from '@/bus/project/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {authReducer} from '@/bus/auth';
import {userReducer} from '@/bus/user';
import {projectReducer} from '@/bus/project';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  project: projectReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;
  auth: AuthState;
  user: UserState;
  project: ProjectState;
};

export default rootReducer;
