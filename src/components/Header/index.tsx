import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
export function Header() {
  return (
    <Flex
      boxShadow="xl"
      bg="white"
      w="100%"
      justify="space-between"
      py="3"
      px="10"
    >
      <Image boxSize="60px" src={Logo} />

      <Flex align="center">
        <Text mr="0.40rem" fontWeight="600">
          Eduardo
        </Text>
        <Avatar name="Eduardo" size="sm" bg="#aca5d3" color="#4E5D66" />
      </Flex>
    </Flex>
  );
}
