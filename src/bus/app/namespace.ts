import {Languages} from '@/i18n';
import {Asset} from 'react-native-image-picker';

export namespace App {
  export type BaseAction<T, P = {}> = {
    type: T;
    payload: P;
  };

  export type APIImage = {
    url: string;
  };

  export type NewAsset = Asset & {
    fromApi?: boolean;
  };

  export type UpdateLanguageAsync = {
    language: Languages;
  };
}
