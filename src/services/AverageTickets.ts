import { api } from './api';

export function AverageTickets() {
  const averageMonth = api.get('avg-ticket-month').then(function (response) {
    return response.data;
  });

  const averageDay = api.get('avg-ticket-day').then(function (response) {
    return response.data;
  });

  console.log(averageDay, averageMonth);
  return { averageMonth, averageDay };
}
