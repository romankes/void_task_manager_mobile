export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',
}

export type AppState = {
  initialized: boolean;
};

//ASYNC

export type BootstrapAsync = {
  type: typeof types.BOOTSTRAP;
};

export type AppActionsTypes = BootstrapAsync;
