import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('accessToken');

  return axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      Authorization: token,
    },
  });
};