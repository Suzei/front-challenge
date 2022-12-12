import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';
import { monthContentText, MonthENUM } from '../../enums/MonthEnums';

interface IChartProps extends Props {
  type?: string;
}

export function Chart({ type, ...rest }: Props) {
  const [chartOptions, setChartOptions] = useState<IChartProps>({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
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
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'],
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
