import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;


axios.interceptors.request.use(config => {
  console.log('Request intercepted');
  return config;
});
axios.interceptors.response.use(response => {
  console.log('Response intercepted');
  return response;
});

export default axios; 