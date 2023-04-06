import axios from 'axios';
import {
  getLocalAccessToken,
  getLocalRefreshToken, removeUser,
  updateLocalAccessToken, updateLocalRefreshToken,
} from './tokenService';

const instance = axios.create({
  baseURL: 'https://a529-77-245-104-174.in.ngrok.io',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
    (config) => {
      const token = getLocalAccessToken();
      console.log(config.url);
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const arr = ['/api/auth/sign-in', '/api/auth/refreshToken'];
      const originalConfig = err.config;
      console.log(originalConfig);
      if (!arr.includes(originalConfig.url) && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await instance.post('/api/auth/refreshToken', {
              refreshToken: getLocalRefreshToken(),
            });
            const data = rs.data;
            updateLocalAccessToken(data.accessToken);
            updateLocalRefreshToken(data.refreshToken);
            return instance(originalConfig);
          } catch (_error) {
            try {
              removeUser();
              localStorage.setItem('session', 'Ваша сессия истекла!');
              window.location.replace('/');
            } catch (e) {

            }
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    },
);
export default instance;
