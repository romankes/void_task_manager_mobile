export namespace Project {
  export type Item = {
    _id: string;
    title: string;
    description: string;
    maxHours: number;
  };

  export type Detail = Item;

  export type ReqFetchItems = {};
  export type ResFetchItems = Item[];

  export type ReqFetchDetail = {id: string};
  export type ResFetchDetail = {};

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
}
