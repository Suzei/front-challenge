import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { Login } from './pages/Login';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/colors';
function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Flex height="100vh" align="center" justify="center">
          <Login />
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
