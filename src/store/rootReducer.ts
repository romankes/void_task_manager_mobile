import {combineReducers} from '@reduxjs/toolkit';

//types
import {AppState} from '@/bus/app/types';
import {UiState} from '@/bus/ui/types';
import {AuthState} from '@/bus/auth/types';
import {UserState} from '@/bus/user/types';

//reducers
import {appReducer} from '@/bus/app';
import {uiReducer} from '@/bus/ui';
import {authReducer} from '@/bus/auth';
import {userReducer} from '@/bus/user';

const rootReducer = combineReducers({
  app: appReducer,
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
});

export type RootState = {
  app: AppState;
  ui: UiState;
  auth: AuthState;
  user: UserState;
};

export default rootReducer;
