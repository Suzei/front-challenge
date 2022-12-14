import { AvgTicketProps, AvgTickets } from '../services/AverageTickets';

import { useCallback, useState, useEffect } from 'react';
import { useBRL } from './useBRL';

export const useTickets = () => {
  const [avgDay, setAvgDay] = useState<AvgTicketProps>();
  const [avgMonth, setAvgMonth] = useState<AvgTicketProps>();

  const getAvgMonth = useCallback(async () => {
    const { data, status } = await AvgTickets.AvgTicketMonths();
    const { formatedInBRL } = useBRL({ brl: data.value });

    setAvgDay({ value: formatedInBRL, growth: data.growth });
  }, []);

  const getAvgDay = useCallback(async () => {
    const { data } = await AvgTickets.AvgTicketDay();
    const { formatedInBRL } = useBRL({ brl: data.value });
    setAvgMonth({ value: formatedInBRL, growth: data.growth });
  }, []);

  useEffect(() => {
    getAvgMonth();
    getAvgDay();
  }, []);

  return {
    avgDay,
    avgMonth,
  };
};
