import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';
import { monthContentText, MonthENUM } from '../../enums/MonthEnums';

interface customValues extends Props {
  chartData: number[];
  chartSubtitle: string[];
}

export function Chart({ chartData, chartSubtitle, ...rest }: customValues) {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        data: chartData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          'JAN',
          'FEV',
          'MAR',
          'ABR',
          'MAI',
          'JUN',
          'JUL',
          'AGO',
          'SET',
          'OUT',
          'NOV',
          'DEZ',
        ],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
    },
  });

  return (
    <Box>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height="350"
      />
    </Box>
  );
}
