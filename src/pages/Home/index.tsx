import { Flex, Heading, Skeleton, Tab } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Card } from '../../components/Card';
import { Chart } from '../../components/Chart';
import { Table } from '../../components/Table';
import { useProductData } from '../../context/ListContext';
import { usePerMonth } from '../../hooks/usePerMonth';

export function Home() {
  const {
    products,
    avgDay,
    avgMonth,
    alerts,
    ordersMonth,
    sellsMonth,
    perMonth,
  } = useProductData();

  return (
    <Flex
      p="10"
      align="flex-start"
      justify="flex-start"
      wrap="wrap"
      w="100%"
      bg="transparent"
      gap="15"
      direction="column"
    >
      <Flex w="100%" direction="column" gap="5" bg="transparent">
        <Heading fontSize="3xl" fontFamily="inherit">
          Início
        </Heading>

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

        <Flex direction="column">
          <Heading color="#5A4CA7" fontFamily="inherit" size="md">
            Dashboard de vendas
          </Heading>
          <Flex></Flex>
        </Flex>

        <Flex direction="column">
          <Heading color="#5A4CA7" fontFamily="inherit" size="md">
            Funil de conversão
          </Heading>
          <Flex></Flex>
        </Flex>

        <Flex direction="column">
          <Heading color="#5A4CA7" fontFamily="inherit" size="md">
            Perfil do usuário
          </Heading>
          <Flex>
            <Flex></Flex>
          </Flex>
        </Flex>

        <Flex>{products ? <Table data={products}></Table> : <Skeleton />}</Flex>
      </Flex>
    </Flex>
  );
}
