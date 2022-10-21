import {Task} from '../task';

export namespace Project {
  export type Item = {
    _id: string;
    title: string;
    description: string;
    maxHours: number;
  };

  export type Detail = Item & {
    spentHors: number;
    tasks: Task.Item[];
  };

  export type ReqFetchItems = {};
  export type ResFetchItems = Item[];

  export type ReqFetchDetail = {id: string};
  export type ResFetchDetail = Detail;

  export type Form = {
    title: string;
    description: string;
    maxHours: number;
  };

  export type ReqCreateItem = Form;
  export type ResCreateItem = {};

  export type ReqUpdateItem = {
    id: string;
    project: Form;
  };
  export type ResUpdateItem = {};

  export type ReqRemoveItem = {
    id: string;
  };
  export type ResRemoveItem = {};
}
