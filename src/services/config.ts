import axios from 'axios';

const API_BASE_URL = 'https://api.airtable.com/v0/appp0HGf4paT2Gh0O';
const API_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

export const apiConfig = {
  fetchProducts: `${API_BASE_URL}/products?maxRecords=3&view=default`,
  fetchProduct: (id: string) => `${API_BASE_URL}/products/${id}`,
  // fetchProduct: `${API_BASE_URL}/products/`,
  login: '/user/login',
}

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});
