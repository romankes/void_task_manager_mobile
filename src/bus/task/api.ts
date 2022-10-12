import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {Task} from '@/bus/task';

export const apiTask = new (class Api {
  fetchItems(params: Task.ReqFetchItems): AxiosPromise<Task.ResFetchItems> {
    return axios({
      url: '/tasks',
      method: 'get',
      params,
    });
  }
  fetchDetail({id}: Task.ReqFetchDetail): AxiosPromise<Task.ResFetchDetail> {
    return axios({
      url: `/tasks/${id}`,
      method: 'get',
    });
  }

  createItem(task: Task.ReqCreateItem): AxiosPromise<Task.ResCreateItem> {
    return axios({
      url: '/tasks',
      method: 'post',
      data: {task},
    });
  }

  updateItem({id, task}: Task.ReqUpdateItem): AxiosPromise<Task.ResCreateItem> {
    return axios({
      url: `/tasks/${id}`,
      method: 'patch',
      data: {task},
    });
  }
})();
