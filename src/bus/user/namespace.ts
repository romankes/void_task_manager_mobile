import {App} from '../app';

export namespace User {
  export type Item = {
    email: string;
    avatar: App.APIImage | null;
    _id: string;
    username: string;
    hasProjects: boolean;
  };

  export type Detail = Item;

  export type ResFetchDetail = Detail;

  export type ReqUpdateDetail = {
    username: string;
    avatar: App.NewAsset | null;
  };
  export type ResUpdateDetail = {};

  export type ResRemoveItem = {};

  export type UpdatePayload = {
    hasProjects?: boolean;
  };
}
