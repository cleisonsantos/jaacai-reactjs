import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jaacai.firebaseio.com/'
});

export default api;
