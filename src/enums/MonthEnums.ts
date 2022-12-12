export enum MonthENUM {
  'Janeiro' = 0,
  'Fevereiro' = 1,
  'Março' = 2,
  'Abril' = 3,
  'Maio' = 4,
  'Junho' = 5,
  'Julho' = 6,
  'Agosto' = 7,
  'Setembro' = 8,
  'Outubro' = 9,
  'Novembro' = 10,
  'Dezembro' = 11,
}

type Months = {
  [key in MonthENUM]: string;
};

export const monthContentText: Months = {
  '0': 'JAN',
  '1': 'FEV',
  '2': 'MAR',
  '3': 'ABR',
  '4': 'MAI',
  '5': 'JUN',
  '6': 'JUL',
  '7': 'AGO',
  '8': 'SET',
  '9': 'OUT',
  '10': 'NOV',
  '11': 'DEZ',
};
