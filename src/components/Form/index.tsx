import { Flex, FormControl } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';

interface IFormikData {
  name: string;
  id: string;
  code: string;
  seller: string;
  deliverTime: string;
}

export function Form() {
  const [list, setList] = useState<IFormikData>([]);
  const handleAddProductOnList = useCallback((formData: IFormikData) => {
    const newProduct: IFormikData = {
      code: formData.code,
      id: formData.id,
      seller: formData.seller,
      name: formData.name,
      deliverTime: formData.deliverTime,
    };

    setList(state => [...state, newProduct]);
    console.log(list);
  }, []);

  const formik = useFormik<IFormikData>({
    initialValues: {
      code: '',
      deliverTime: '',
      id: '',
      name: '',
      seller: '',
    },
    onSubmit: (values, actions) => {
      actions.resetForm({
        values: {
          code: '',
          deliverTime: '',
          id: '',
          name: '',
          seller: '',
        },
      });
      handleAddProductOnList(values);
    },
  });

  return (
    <Flex w="100%">
      <FormControl onSubmit={formik.handleSubmit} gap="3"></FormControl>
    </Flex>
  );
}
