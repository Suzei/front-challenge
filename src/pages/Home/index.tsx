import { Flex, Heading } from '@chakra-ui/react';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Flex
      p="8"
      align="flex-start"
      justify="flex-start"
      wrap="wrap"
      w="100%"
      gap="10"
      direction="column"
    >
      <Heading>Início</Heading>
      <Card
        aboutMonth="ontem"
        growthNumber={1}
        title="Taxa de X"
        cardAlike="metrics"
        rightContent="arrow"
      />

      <Card
        aboutMonth="junho"
        growthNumber={-1}
        title="Taxa de X"
        cardAlike="metrics"
        rightContent="arrow"
      />

      <Card
        aboutMonth="dezembro"
        growthNumber={-1}
        title="Taxa de X"
        cardAlike="chart"
        rightContent="select"
      />
    </Flex>
  );
}
