import axios from '@/services/axios';
import {AxiosPromise} from 'axios';
import {Auth} from './namespace';

export const apiAuth = new (class Api {
  signIn(user: Auth.ReqSignIn): AxiosPromise<Auth.ResSignIn> {
    return axios({url: '/auth/signIn', method: 'post', data: {user}});
  }
  signUp(user: Auth.ReqSignUp): AxiosPromise<Auth.ResSignUp> {
    return axios({url: '/auth/signUp', method: 'post', data: {user}});
  }
  logout(): AxiosPromise<Auth.ResSignUp> {
    return axios({url: '/auth/logout', method: 'delete'});
  }
})();
