
import type { AxiosResponse } from 'axios';
import type { ProductType } from 'types/ProductType';

import { axiosInstance, apiConfig } from './config';

export type ProductResponse = {
  records: ProductType[];
}

function fetchProducts(): Promise<AxiosResponse<ProductResponse>> {
  return axiosInstance.get(apiConfig.fetchProducts);
  // return axios.get(`${API_BASE_URL}/products?maxRecords=3&view=default`, {
  //   headers: {
  //     Authorization: `Bearer ${API_TOKEN}`
  //   }
  // });
}

function login() {
  return axiosInstance.post('/user/login')
}

export { fetchProducts };
