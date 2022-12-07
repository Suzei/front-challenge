import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Ubuntu, sans-serif',
  },

  styles: {
    global: {
      'html, body': {
        color: '#333333',
      },
    },
  },
});
