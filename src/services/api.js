import axios from 'axios';

const api = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/photos/',
});

export default api;
