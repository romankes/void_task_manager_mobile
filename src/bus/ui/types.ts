import type {Ui} from './namespace';

export enum types {}
//Async

// STATE

export type UiState = {
  loaders: Ui.Loader[];
  link: string | null;
};
