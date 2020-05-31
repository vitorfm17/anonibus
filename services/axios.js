import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-anonibus-da668.cloudfunctions.net',
});

export default api;
