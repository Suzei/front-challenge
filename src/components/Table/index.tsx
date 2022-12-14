import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Flex,
  Heading,
  Tbody,
  Divider,
  Center,
  Button,
} from '@chakra-ui/react';
import { ProductProps } from '../../services/GetProductList';
import { TableItem } from '../TableItem';
import { useEffect, useState } from 'react';

export interface ITableData {
  data: ProductProps[];
}

export function Table({ data }: ITableData) {
  return (
    <Flex
      boxShadow="lg"
      borderRadius="8px"
      w="100%"
      direction="column"
      bg="#FFFFFF"
      p="10"
    >
      <Heading fontFamily="inherit" size="md">
        Listagem de Produtos
      </Heading>
      <TableContainer borderRadius="8px" mt="2.5rem" w="100%">
        <ChakraTable size="md" variant="simple" colorScheme="gray">
          <Thead>
            <Tr borderRadius="8px" bg="#4E5D66" color="white">
              <Th width="120px" color="white">
                Produto
              </Th>
              <Th color="white">Cores</Th>
              <Th color="white">Especificações</Th>
              <Th color="white">Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(item => (
              <TableItem
                specifications={[item.description]}
                key={item.id}
                colors={[item.color]}
                name={item.name}
                id={item.id}
                status={item.status}
              />
            ))}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Flex>
  );
}
