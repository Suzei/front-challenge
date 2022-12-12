import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Input } from '../../components/Input';
import Categories from './formContent/details.json';
import Specifications from './formContent/specifications.json';

export function CreateProduct() {
  return (
    <Flex gap="2rem" w="100%" p="10" direction="column">
      <Heading>Adicionar Produto</Heading>
      <Flex bg="white" borderRadius="8px" mt="2.5rem">
        <Flex
          w="100%"
          wrap="wrap"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <FormControl p="9" display="flex" justifyContent="space-between">
            <Flex direction="column" gap="3">
              <Text fontSize="1.25rem">Detalhes</Text>

              <Flex direction="column">
                <Flex direction="column" align="flex-start" mt="2.5rem">
                  {Categories.map(item => (
                    <Flex
                      justify="space-between"
                      direction="row"
                      alignItems="center"
                    >
                      <Text position="relative">{item.label}</Text>
                      <Box>
                        <Input w="100%" p="1" />
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            <Flex p="3" flex="column">
              <Flex direction="column">
                <Text fontSize="1.25rem">Categorias</Text>
                <Select
                  placeholder="Selecionar categorias"
                  color="gray.400"
                  bg="#F3F5F6"
                  mt="2.5rem"
                ></Select>
              </Flex>
              <Box></Box>
            </Flex>

            <Flex p="3" direction="column">
              <Flex direction="column">
                <Text fontSize="1.25rem">Tags</Text>
                <Select
                  mt="2.5rem"
                  placeholder="Selecionar tags"
                  color="gray.400"
                  bg="#F3F5F6"
                ></Select>
              </Flex>
              <Box></Box>
            </Flex>
          </FormControl>
          <Flex w="100%" direction="column" p="10">
            <Text fontSize="1.25rem">Especificações</Text>

            <Flex
              align="flex-start"
              mt="3"
              bg="black"
              direction="column"
              gap="2"
              w="100%"
            >
              <Flex justify="center" w="100%">
                <Flex direction="column" gap="2" justify="space-evenly">
                  {Specifications.map(item => (
                    <Text>{item.label}</Text>
                  ))}
                </Flex>

                <Flex
                  w="100%"
                  ml="3.25rem"
                  direction="column"
                  justify="center"
                  gap="2"
                >
                  {Specifications.map(item =>
                    item.label === 'Informações' ||
                    item.label === 'Limpeza e cuidados' ? (
                      <Input p="3rem" pl="0" />
                    ) : (
                      <Input />
                    ),
                  )}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
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
