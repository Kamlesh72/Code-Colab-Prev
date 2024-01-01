import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosInstance;
