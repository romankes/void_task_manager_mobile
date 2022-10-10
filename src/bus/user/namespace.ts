export namespace User {
  export type Item = {
    email: string;
    // avatar: string;
    name: string;
    _id: string;
    username: string;
    hasProjects: boolean;
  };

  export type Detail = Item;

  export type ResFetchDetail = Detail;

  export type ReqUpdateDetail = {};
  export type ResUpdateDetail = {};
}
