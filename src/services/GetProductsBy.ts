import { api } from './api';

export interface MonthProps {
  value: string;
  growth: string;
}

interface IMonthTypeProps {
  type: 'sells' | 'orders';
}

const productsBy = ({ type }: IMonthTypeProps) =>
  api.get<MonthProps[]>(`${type}-month`);

export const getProductBy = {
  productsBy,
};
