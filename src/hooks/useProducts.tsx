import { ProductList, ProductProps } from '../services/GetProductList';
import { useCallback, useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const getProducts = useCallback(async () => {
    const { data } = await ProductList.GetProductList();
    setProducts(data);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};
