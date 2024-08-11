import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken'); 
      if (refreshToken) {
        try {
          const response = await apiClient.post('/refresh_token', { refreshToken });
          localStorage.setItem('token', response.data.accessToken);
          return apiClient(originalRequest);
        } catch (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; 
        }
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; 
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

