import { Box } from '@chakra-ui/react';
import ReactApexChart, { Props } from 'react-apexcharts';

export function Chart({ ...rest }: Props) {
  return (
    <Box>
      <ReactApexChart height="400px" />
    </Box>
  );
}
