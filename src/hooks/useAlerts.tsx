import { Alert, AlertProps } from '../services/alerts';
import { useCallback, useState, useEffect } from 'react';

export const useAlerts = () => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);

  const getAlerts = useCallback(async () => {
    const { data } = await Alert.Alerts();

    setAlerts(data);
  }, []);

  useEffect(() => {
    getAlerts();
  }, []);
  return {
    alerts,
  };
};
