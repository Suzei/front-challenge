import { Flex } from '@chakra-ui/react';
import { Card } from '../../../../components/Card';
import { useProductData } from '../../../../context/ListContext';

export function TicketsAndProducts() {
  const { avgDay, avgMonth, alerts, ordersMonth, sellsMonth } =
    useProductData();
  return (
    <Flex w="100%" justify="flex-start" gap="8" alignItems="center">
      <Card
        about="ontem"
        value={avgDay?.value}
        title="Ticket médio últimas 24h"
        growthNumber={avgDay?.growth}
      />

      <Card
        about="julho"
        value={avgMonth?.value}
        title="Ticket médio mensal"
        growthNumber={avgMonth?.growth}
      />

      {alerts.map(item => (
        <Card
          since={item.since}
          value={item.value}
          title={item.type}
          rightContent="arrow"
        />
      ))}

      <Card
        title="Pedidos realizados no mês"
        growthNumber={ordersMonth.growth}
        value={ordersMonth.value}
      />
      <Card
        title="Produtos vendidos no mês"
        growthNumber={sellsMonth.growth}
        value={sellsMonth.value}
      />
    </Flex>
  );
}
