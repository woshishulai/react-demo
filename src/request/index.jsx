import axios from 'axios';
import { getToken } from '@/utils/setToken';
const instance = axios.create({
    // axios 的一些配置，baseURL  timeout
    baseURL: 'https://www.showdoc.com.cn/jinducasey/8321036098744323',
    timeout: 5000,
});

instance.interceptors.request.use(
    config => {
        config.headers['token'] = getToken('token');
        return config;
    },
    err => {
        return Promise.reject(err);
    },
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    e => {
        return Promise.reject(e);
    },
);

export default instance;
