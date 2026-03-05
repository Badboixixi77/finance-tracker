import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const transactionAPI = {
  getAll: () => axios.get(`${API_URL}/transactions`),
  create: (data) => axios.post(`${API_URL}/transactions`, data),
  update: (id, data) => axios.put(`${API_URL}/transactions/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/transactions/${id}`)
};
