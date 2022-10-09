export namespace Ui {
  export type FormName =
    | 'logout'
    | 'sign_in'
    | 'sign_up'
    | 'user'
    | 'user_action';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };
}
