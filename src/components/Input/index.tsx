import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export function Input({ ...rest }: InputProps) {
  return (
    <ChakraInput
      {...rest}
      border="none"
      fontSize="1rem"
      bg="#F3F5F6"
      w="300px"
    ></ChakraInput>
  );
}
