import {App} from './namespace';

export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',

  UPDATE_LANGUAGE = 'APP/UPDATE_LANGUAGE',
}

export type AppState = {
  initialized: boolean;
};

//ASYNC

export type BootstrapAsync = App.BaseAction<typeof types.BOOTSTRAP>;

export type UpdateLanguageAsync = App.BaseAction<
  typeof types.UPDATE_LANGUAGE,
  App.UpdateLanguageAsync
>;

export type AppActionsTypes = BootstrapAsync | UpdateLanguageAsync;
