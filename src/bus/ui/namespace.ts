export namespace Ui {
  export type FormName =
    | 'logout'
    | 'sign_in'
    | 'sign_up'
    | 'user'
    | 'user_action'
    | 'project'
    | 'project_action'
    | 'task'
    | 'task_action';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };
}
