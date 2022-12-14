import { Button, Flex, Heading, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Form } from '../../components/Form';

export function CreateProduct() {
  return (
    <Flex gap="2rem" w="100%" p="10" direction="column">
      <Heading fontSize="1.75em" fontFamily="inherit">
        Adicionar Produto
      </Heading>
      <Flex bg="white" borderRadius="8px" mt="2.5rem">
        <Flex
          w="100%"
          wrap="wrap"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Form />
        </Flex>
      </Flex>

      <Flex bg="white" justify="space-between">
        <Text>Itens</Text>
        <Button>
          <BiPlus /> Adicionar
        </Button>
      </Flex>
    </Flex>
  );
}
