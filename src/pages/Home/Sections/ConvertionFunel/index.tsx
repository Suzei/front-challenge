import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from '../../../../components/Card';
import { ConvertionENUM } from '../../../../enums/conversionEnums';
import { api } from '../../../../services/api';

export function ConvertionFunel() {
  interface IResponse {
    growth: number;
    value: number;
  }

  interface IConversionsInfo {
    [key: string]: IResponse;
  }

  const [conversionsResume, setConversionsResume] = useState<IConversionsInfo>(
    {},
  );

  useEffect(() => {
    api.get('conversions-resume').then(response => {
      setConversionsResume(response.data);
    });
  }, []);

  const objectEntries = Object.entries(conversionsResume);

  return (
    <Flex direction="column">
      <Heading color="#5A4CA7" fontFamily="inherit" size="md">
        Funil de conversão
      </Heading>
      <Flex align="flex-start" gap="5">
        {objectEntries.map(item => (
          <Card
            about="julho"
            key={ConvertionENUM[item[0]]}
            value={item[1].value}
            title={ConvertionENUM[item[0]]}
            growthNumber={item[1].growth}
          />
        ))}
      </Flex>
    </Flex>
  );
}
