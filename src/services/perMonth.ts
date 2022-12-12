import { api } from './api';

interface IPerMonthProps {
  value: string;
  growth: string;
}

type Routes = {
  type:
    | 'profit'
    | 'sells'
    | 'canceled-orders'
    | 'profit-expectation'
    | 'orders';
};

interface PerMonth {
  monthPerType: IPerMonthProps[];
}
const perMonth = ({ type }: Routes) =>
  api.get<IPerMonthProps[]>(`${type}-per-month`);

export const getPerMonth = {
  perMonth,
};
