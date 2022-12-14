import { Flex, Heading, Skeleton, Tab } from '@chakra-ui/react';
import { Table } from '../../components/Table';
import { useProductData } from '../../context/ListContext';
import { ConvertionFunel } from './Sections/ConvertionFunel';
import { DashboardSales } from './Sections/DashboardSales';
import { TicketsAndProducts } from './Sections/TicketsAndProducts';
import { UserProfile } from './Sections/UserProfile';

export function Home() {
  const { products } = useProductData();

  return (
    <Flex
      p="10"
      align="flex-start"
      justify="flex-start"
      wrap="wrap"
      w="100%"
      bg="transparent"
      gap="0"
      direction="column"
    >
      <Flex w="100%" direction="column" gap="8" bg="transparent">
        <Heading fontSize="3xl" fontFamily="inherit">
          Início
        </Heading>
        <Flex gap="20" direction="column">
          <TicketsAndProducts />
          <DashboardSales />
          <ConvertionFunel />
          <UserProfile />
        </Flex>

        <Flex>{products ? <Table data={products}></Table> : <Skeleton />}</Flex>
      </Flex>
    </Flex>
  );
}
