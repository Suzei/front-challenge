import { Flex, Heading } from '@chakra-ui/react';
import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../services/api';
import { useProduct } from '../../context/ListContext';
import { AverageTickets } from '../../services/AverageTickets';
export function Home() {
  const { setList, list } = useProduct();
  const [set, setSet] = useState([]);
  const { averageDay, averageMonth } = AverageTickets();

  useEffect(() => {
    setSet([averageDay, averageMonth]);
    console.log(set);
  }, []);
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
        <Heading fontSize="1.75rem">Início</Heading>

        <Flex w="100%" justify="space-between" alignItems="center">
          <Card title={list.value} growthNumber={list.growth} />;
          <Card title={list.value} growthNumber={list.growth} />;
          <Card title={list.value} growthNumber={list.growth} />;
          <Card title={list.value} growthNumber={list.growth} />;
          <Card title={list.value} growthNumber={list.growth} />;
          <Card title={list.value} growthNumber={list.growth} />;
        </Flex>

        <Flex direction="column">
          <Heading color="#5A4CA7" fontSize="1.5rem">
            Dashboard de vendas
          </Heading>
          <Flex>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>

        <Flex direction="column">
          <Heading color="#5A4CA7" fontSize="1.5rem">
            Funil de conversão
          </Heading>
          <Flex>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>

        <Flex direction="column">
          <Heading color="#5A4CA7" fontSize="1.5rem">
            Perfil do usuário
          </Heading>
          <Flex>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
