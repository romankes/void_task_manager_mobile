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
    date: string;
  };

  export type DateFilterType = 'week' | 'today' | 'month';
  export type StatusFilterType = 'started' | 'waiting' | 'finished';

  export type ReqFetchItems = {
    date: string;
  };
  export type ResFetchItems = {
    [key: string]: Item[];
  };

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = Detail;

  export type Form<T = string> = {
    title?: string;
    description?: string;

    project?: T;

    date?: string;
  };

  export type ReqCreateItem = Form;
  export type ResCreateItem = {};

  export type ReqUpdateItem = {
    id: string;
    task: Form & {
      startDate?: string;
      endDate?: string;
    };
  };
  export type ResUpdateItem = Detail;
}
