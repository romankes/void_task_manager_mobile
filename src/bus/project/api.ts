import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {Project} from '@/bus/project';

export const apiProject = new (class Api {
  fetchItems(
    params: Project.ReqFetchItems,
  ): AxiosPromise<Project.ResFetchItems> {
    return axios({url: '/projects', method: 'get', params});
  }

  fetchDetail({
    id,
  }: Project.ReqFetchDetail): AxiosPromise<Project.ResFetchItems> {
    return axios({url: `/projects/${id}`, method: 'get'});
  }

  createItem(
    project: Project.ReqCreateItem,
  ): AxiosPromise<Project.ResCreateItem> {
    return axios({url: '/projects', method: 'post', data: {project}});
  }

  updateItem({
    id,
    project,
  }: Project.ReqUpdateItem): AxiosPromise<Project.ResCreateItem> {
    return axios({url: `/projects/${id}`, method: 'patch', data: {project}});
  }

  removeItem({id}: Project.ReqRemoveItem): AxiosPromise<Project.ResRemoveItem> {
    return axios({url: `/projects/${id}`, method: 'delete'});
  }
})();
