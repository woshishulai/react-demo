import instance from './index';
//登陆
export const loginApi = query => instance.post('login', query);
