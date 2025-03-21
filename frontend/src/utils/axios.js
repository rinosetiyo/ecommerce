import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  timeout: 5000,

    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default apiInstance;