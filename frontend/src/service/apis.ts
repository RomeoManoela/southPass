import axios, { AxiosInstance } from 'axios';
import { formDataProps } from '../helper/types.ts';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8001/api',
});

api.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getToken = async (data: formDataProps) => {
  try {
    const res = await api.post('token-obtain/', data);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const refreshToken = async () => {
  try {
    const res = await api.post('refresh-token/');
    if (res.status === 200) {
      return res.data.access;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const registerUser = async (data: formDataProps) => {
  try {
    const res = await api.post('register/', data);
    if (res.status === 201) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default api;
