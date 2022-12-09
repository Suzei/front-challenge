import {
  Flex,
  Select,
  Text,
  Card as ChakraCard,
  Tag,
  TagLabel,
  CardHeader,
  CardBody,
  Container,
} from '@chakra-ui/react';
import { Chart } from '../Chart';
import { AiOutlineRight } from 'react-icons/ai';

interface ICardProps {
  cardAlike: 'chart' | 'metrics';
  rightContent: 'select' | 'arrow';
  title?: string;
  growthNumber: number;
  aboutMonth?: string;
}

export function Card({
  cardAlike,
  rightContent,
  title,
  growthNumber,
  aboutMonth,
}: ICardProps) {
  const typeOfNumber = growthNumber > 0 ? '#109E8E' : '#D6628E';

  return (
    <Container>
      <ChakraCard p={[2, 3]} bg="white" pl="0.5rem">
        <Flex p="2" gap="2" direction="column" align="flex-start">
          <Flex gap="2" align="center" justify="space-between" w="100%">
            <CardHeader p="0" whiteSpace="nowrap" w="100%">
              {title}
            </CardHeader>
            {rightContent === 'arrow' ? (
              <AiOutlineRight />
            ) : (
              <Select size="xs" placeholder="Ano" color="" />
            )}
          </Flex>

          <CardBody
            width="100%"
            p="0"
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
          >
            <Tag colorScheme="white" boxShadow="lg" borderRadius="xs">
              <TagLabel color={typeOfNumber}>
                {growthNumber > 0 && '+'}
                {growthNumber}%
              </TagLabel>
            </Tag>
            <Text whiteSpace="nowrap" fontSize="0.875rem" color="#109E8E">
              em relação a {aboutMonth}
            </Text>

            <Flex></Flex>
          </CardBody>
        </Flex>
      </ChakraCard>
    </Container>
  );
}
