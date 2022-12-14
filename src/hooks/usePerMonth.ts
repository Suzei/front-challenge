import { getPerMonth } from '../services/perMonth';
import { useCallback, useState, useEffect } from 'react';
import { MonthENUM } from '../enums/MonthEnums';

interface Charts {
  type: string;
  data: [
    {
      month: MonthENUM;
      value: number;
    },
  ];
}

export const usePerMonth = () => {
  const [perMonth, setPerMonth] = useState<Charts[]>([]);

  const getAlerts = useCallback(async () => {
    const sellsPerMonth = (await getPerMonth.perMonth({ type: 'sells' })).data;

    const profitOrders = (await getPerMonth.perMonth({ type: 'profit' })).data;

    const profitExpectation = (
      await getPerMonth.perMonth({ type: 'profit-expectation' })
    ).data;

    const canceledOrders = (
      await getPerMonth.perMonth({ type: 'canceled-orders' })
    ).data;

    const madedOrders = (await getPerMonth.perMonth({ type: 'orders' })).data;

    const sellsDonePerMonth = {
      type: 'Pedidos por mês',
      data: sellsPerMonth,
    };

    const canceledOrdersPerMonth = {
      type: 'Pedidos realizados x cancelados',
      data: [madedOrders, canceledOrders],
    };

    const perMonthProfit = {
      type: 'Expectativa de lucro x lucro real',
      data: [profitOrders, profitExpectation],
    };

    setPerMonth([sellsDonePerMonth, perMonthProfit, canceledOrdersPerMonth]);
    console.log(perMonth);
  }, []);

  useEffect(() => {
    getAlerts();
  }, []);

  return {
    perMonth,
  };
};
