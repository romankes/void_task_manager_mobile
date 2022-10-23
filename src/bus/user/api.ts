import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {User} from './namespace';

export const apiUser = new (class Api {
  fetchDetail(): AxiosPromise<User.ResFetchDetail> {
    return axios({url: '/users/current', method: 'get'});
  }

  updateItem(obj: User.ReqUpdateDetail): AxiosPromise<User.ReqUpdateDetail> {
    const data = new FormData();

    for (let k in obj) {
      const key = k as keyof User.ReqUpdateDetail;
      if (key === 'avatar' && obj[key]?.fromApi) {
        continue;
      }

      data.append(`user[${key}]`, obj[key]);
    }

    return axios({
      url: '/users/current',
      method: 'patch',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    });
  }

  removeItem(): AxiosPromise<User.ResRemoveItem> {
    return axios({
      url: '/users/current',
      method: 'delete',
    });
  }
})();
