import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://873d-77-245-104-174.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
