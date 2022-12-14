import { api } from './api';

export interface ProductProps {
  name: string;
  color: string;
  status: string;
  id: string;
  description: string;
}

export interface IPagination {
  page?: number;
  limit?: number;
}

const GetProductList = () =>
  api.get<ProductProps[]>(`products?page=2&limit=10`);

export const ProductList = {
  GetProductList,
};
