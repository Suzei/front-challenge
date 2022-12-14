import { Image, Td, Text, Tr } from '@chakra-ui/react';

interface TableItemProps {
  id: string;
  name: string;
  status: string;
  colors: string[];
  specifications: string[];
}

export function TableItem({
  colors,
  name,
  specifications,
  status,
}: TableItemProps) {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>
        {colors.map(item => (
          <Text textTransform="capitalize">{item}</Text>
        ))}
      </Td>
      <Td>
        {specifications.map(item => (
          <Text>{item}</Text>
        ))}
      </Td>
      <Td>{status}</Td>
    </Tr>
  );
}
