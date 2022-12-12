import { api } from './api';

export interface AlertProps {
  type: string;
  value: number;
  since: string;
}

interface IAlerts {
  alerts: AlertProps[];
}

const Alerts = () => api.get<AlertProps[]>('alerts');

export const Alert = {
  Alerts,
};
