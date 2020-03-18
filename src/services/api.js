import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.newsupnow.com/wp-json/wp/v2',
});

export default api;
