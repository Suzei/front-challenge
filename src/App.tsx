import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ListProvider, useProduct } from './context/ListContext';
import { Router } from './routes/Router';
import './styles/global.css';

function App() {
  return (
    <ListProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </ListProvider>
  );
}

export default App;
