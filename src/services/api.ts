import axios from 'axios';

const api = axios.create({
  baseURL: 'https://628bf017667aea3a3e387e51.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key':
      '226875f91cf43e2b0c314ef9c2a9521d5808960cc5a759c16d66e92803771178',
  },
});

export { api };
