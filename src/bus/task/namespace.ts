import {Project} from '../project';

export namespace Task {
  export type Item = {
    _id: string;
    title: string;
    description: string;
    project: Project.Item;
  };

  export type Detail = Item & {
    startDate: string | null;
    endDate: string | null;
  };

  export type FilterType = 'week' | 'today' | 'month';

  export type ReqFetchItems = {
    endDate: string;
  };
  export type ResFetchItems = {
    [key: string]: Item[];
  };

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = Detail;

  export type Form<T = string> = {
    title: string;
    description: string;

    project: T;

    date: string;
  };

  export type ReqCreateItem = Form;
  export type ResCreateItem = {};

  export type ReqUpdateItem = {
    id: string;
    task: Form;
  };
  export type ResUpdateItem = {};
}
