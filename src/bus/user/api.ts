import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {User} from './namespace';

export const apiUser = new (class Api {
  fetchDetail(): AxiosPromise<User.ResFetchDetail> {
    return axios({url: '/users/current', method: 'get'});
  }

  updateDetail(data: User.ReqUpdateDetail): AxiosPromise<User.ReqUpdateDetail> {
    const fd = new FormData();

    return axios({
      url: '/users',
      method: 'patch',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: fd,
    });
  }
})();
