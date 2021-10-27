
import type { AxiosResponse } from 'axios';
import type { ProductType } from 'types/ProductType';

import { axiosInstance, apiConfig } from './config';

export type ProductListResponse = {
  records: ProductType[];
}

function fetchProducts(): Promise<AxiosResponse<ProductListResponse>> {
  return axiosInstance.get(apiConfig.fetchProducts);
  // return axios.get(`${API_BASE_URL}/products?maxRecords=3&view=default`, {
  //   headers: {
  //     Authorization: `Bearer ${API_TOKEN}`
  //   }
  // });
}

function fetchProduct(id: string): Promise<AxiosResponse<ProductType>> {
  return axiosInstance.get(apiConfig.fetchProduct(id));
  // throw new Error('Oh no!');
}

function login() {
  return axiosInstance.post('/user/login')
}

export { fetchProducts, fetchProduct };
