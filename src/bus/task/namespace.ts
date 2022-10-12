export namespace Task {
  export type Item = {
    _id: string;
    title: string;
    description: string;
  };

  export type Detail = Item;

  export type FilterType = 'week' | 'today' | 'month';

  export type ReqFetchItems = {
    type: FilterType;
  };
  export type ResFetchItems = Item[];

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = Detail;

  export type Form<T = string> = {
    title: string;
    description: string;

    project: T;
  };

  export type ReqCreateItem = Form;
  export type ResCreateItem = {};

  export type ReqUpdateItem = {
    id: string;
    task: Form;
  };
  export type ResUpdateItem = {};
}
