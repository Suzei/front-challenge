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
import { differenceInBusinessDays, isValid } from 'date-fns';

interface ICardProps {
  cardAlike?: 'chart' | 'metrics';
  rightContent?: 'select' | 'arrow';
  title?: string;
  growthNumber?: number | string;
  about?: string;
  value: string | number;
  since?: Date | string;
}

export function Card({
  cardAlike,
  rightContent,
  title,
  growthNumber,
  value,
  about,
  since,
}: ICardProps) {
  const typeOfNumber = growthNumber > 0 ? '#109E8E' : '#D6628E';
  const differenceBetweenDays = differenceInBusinessDays(
    new Date(Date.now()),
    new Date(since),
  );

  return (
    <ChakraCard pl="0" bg="white">
      <Flex p="3" gap="1" direction="column" align="flex-start">
        <Flex gap="2" align="center" justify="space-between">
          <CardHeader
            color="#4E5D66"
            p="0"
            whiteSpace="nowrap"
            fontSize="0.9rem"
            fontWeight="bold"
          >
            {title}
          </CardHeader>

          {rightContent &&
            (rightContent === 'arrow' ? (
              <AiOutlineRight size={18} />
            ) : (
              <Select />
            ))}
        </Flex>

        <CardBody
          width="100%"
          p="0"
          pl="1"
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
        >
          {cardAlike === 'chart' ? (
            <Chart />
          ) : (
            <>
              <Tag colorScheme="white" boxShadow="sm" borderRadius="xs">
                {growthNumber && (
                  <TagLabel fontSize="0.75rem" color={typeOfNumber}>
                    {growthNumber > 0 && '+'}
                    {growthNumber}%
                  </TagLabel>
                )}

                {since && (
                  <TagLabel fontSize="0.75rem" color="#D6628E">
                    há {differenceBetweenDays} dias
                  </TagLabel>
                )}
              </Tag>
              <Text whiteSpace="nowrap" fontSize="0.875rem" color="#109E8E">
                em relação a {about}
              </Text>

              <Text>
                {typeof value === 'string' ? (
                  value
                ) : (
                  <Text fontSize="sm">{value} produtos</Text>
                )}
              </Text>
            </>
          )}
        </CardBody>
      </Flex>
    </ChakraCard>
  );
}
