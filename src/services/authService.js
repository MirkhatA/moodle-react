import {instance} from './interceptor.js';

const login = (barcode, password) => {
  const url = '/api/auth/sign-in';
  return instance.post(url, {barcode, password}, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode': 'cors',
    },
  });
};

const logout = (id) => {
  return instance.delete(`/api/auth/logout?userId=${id}`);
};

export {login, logout};
