import { useCallback, useState, useEffect } from 'react';
import { getProductBy, MonthProps } from '../services/GetProductsBy';

export const useMonthAmounts = () => {
  const [sellsMonth, setSellsMonth] = useState<MonthProps[]>([]);
  const [ordersMonth, setOrdersMonth] = useState<MonthProps[]>([]);

  const getSellsMonth = useCallback(async () => {
    const { data } = await getProductBy.productsBy({ type: 'sells' });
    setSellsMonth(data);
  }, []);

  const getOrdersMonth = useCallback(async () => {
    const { data } = await getProductBy.productsBy({ type: 'orders' });
    setOrdersMonth(data);
  }, []);

  useEffect(() => {
    getSellsMonth();
    getOrdersMonth();
  }, []);

  return {
    sellsMonth,
    ordersMonth,
  };
};
