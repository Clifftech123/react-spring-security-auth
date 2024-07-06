import axios from 'axios';

const API = axios.create({
  baseURL: 'http/localhost:3000',
  headers: {
    'Content-type': 'application/json',
    Accept: 'Application/json',
  },
});



export default API;