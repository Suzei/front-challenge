import { api } from './api';

export interface AvgTicketProps {
  growth: number;
  value: number | string;
}

const AvgTicketMonths = () => api.get<AvgTicketProps>('avg-ticket-month');
const AvgTicketDay = () => api.get<AvgTicketProps>('avg-ticket-day');

export const AvgTickets = {
  AvgTicketMonths,
  AvgTicketDay,
};
