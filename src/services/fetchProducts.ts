import axios from 'axios';
import type { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://api.airtable.com/v0/appp0HGf4paT2Gh0O';
const API_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

export type ProductResponse = {
  records: ProductType[];
}

export type ProductType = {
  id: string;
  fields: {
    name: string;
    price: number;
  }
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
});

function fetchProducts(): Promise<AxiosResponse<ProductResponse>> {
  return axiosInstance.get('/products?maxRecords=3&view=default');
  // return axios.get(`${API_BASE_URL}/products?maxRecords=3&view=default`, {
  //   headers: {
  //     Authorization: `Bearer ${API_TOKEN}`
  //   }
  // });
}

export { fetchProducts };
