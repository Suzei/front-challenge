import { createContext, useContext, useState } from 'react';
import { IProduct, IProductSpecifications } from '../entitites/Product';
import React, { useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductProps } from '../services/GetProductList';
import { useTickets } from '../hooks/useTickets';
import { useAlerts } from '../hooks/useAlerts';
import { AvgTicketProps } from '../services/AverageTickets';
import { AlertProps } from '../services/alerts';
import { useMonthAmounts } from '../hooks/useMonthAmount';
import { MonthProps } from '../services/GetProductsBy';
import { usePerMonth } from '../hooks/usePerMonth';
interface IListContext {
  products: ProductProps[];
  avgDay: AvgTicketProps;
  avgMonth: AvgTicketProps;
  alerts: AlertProps[];
  ordersMonth: MonthProps;
  sellsMonth: MonthProps;
  perMonth: [type: string, data: []];
}

const ListContext = createContext({} as IListContext);

export const ListProvider: React.FC = ({ children }) => {
  const { products } = useProducts();
  const { avgDay, avgMonth } = useTickets();
  const { alerts } = useAlerts();
  const { ordersMonth, sellsMonth } = useMonthAmounts();
  const { perMonth } = usePerMonth();

  return (
    <ListContext.Provider
      value={{
        products,
        avgDay,
        avgMonth,
        alerts,
        ordersMonth,
        sellsMonth,
        perMonth,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export function useProductData() {
  const context = useContext(ListContext);

  return context;
}
