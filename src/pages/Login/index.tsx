import {
  Flex,
  Button,
  Text,
  FormLabel,
  FormControl,
  Box,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import Logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Flex
      h="100%"
      width="300px"
      p="6"
      direction="column"
      align="center"
      justify="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap="8">
        <img src={Logo} />
        <Text fontWeight="700" fontSize="1.5rem" fontFamily="Nunito">
          Entrar na plataforma
        </Text>
      </Box>
      <FormControl>
        <InputGroup
          fontFamily="Ubuntu"
          display="flex"
          mt="10"
          gap="2"
          p="2"
          flexDirection="column"
        >
          <FormLabel ml="2" mb="0" fontSize="1rem" fontWeight="normal">
            E-mail
          </FormLabel>
          <Input fontFamily="Ubuntu" type="text" fontSize="1.25rem" />
          <FormLabel fontSize="1rem" ml="2" mb="0" fontWeight="normal">
            Senha
          </FormLabel>
          <InputGroup mb="2">
            <Input
              fontFamily="Ubuntu"
              type={showPassword ? 'text' : 'password'}
            />
            <InputRightElement>
              <Button
                bg="transparent"
                padding="0.5"
                onClick={handleShowPassword}
              >
                {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            fontFamily="Ubuntu"
            fontWeight="regular"
            alignSelf="center"
            fontSize="0.85rem"
            bg="#5A4CA7"
            color="white"
            p={[1, 4]}
          >
            Entrar
          </Button>
        </InputGroup>
      </FormControl>
    </Flex>
  );
}
