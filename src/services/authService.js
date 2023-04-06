import axios from 'axios';

const API_URL = 'https://a529-77-245-104-174.in.ngrok.io/api/auth';

const login = (barcode, password) => {
  return axios
      .post(API_URL + '/sign-in', {
        barcode,
        password,
      });
};

const logout = (id) => {
  return axios.delete(API_URL + `/logout?userId=${id}`);
};

export {login, logout};
