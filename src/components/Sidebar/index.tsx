import { Box, Divider, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsHouse, BsLayers, BsTruck, BsCartDash } from 'react-icons/bs';

interface IconProps {
  icon: JSX.Element;
  path?: string | null;
}

interface SideBarIconProps {
  options: IconProps[];
}
export function SideBar() {
  const sideBarOptions: SideBarIconProps = {
    options: [
      {
        icon: <BsHouse size={18} />,
        path: '/',
      },

      {
        icon: <BsLayers size={18} />,
      },

      {
        icon: <BsTruck size={18} />,
      },

      {
        icon: <BsCartDash size={18} />,
      },

      {
        icon: <BsTruck size={18} />,
      },
    ],
  };

  return (
    <Flex
      ml="1rem"
      mt="1rem"
      boxShadow="lg"
      direction="column"
      gap="2"
      bg="white"
      borderRadius="8px"
    >
      <Flex
        w="100%"
        display="flex"
        direction="column"
        align="center"
        justify="center"
        pt="5"
      >
        <Box pb="5">
          <BiMenuAltLeft size={23} />
        </Box>
        <Divider w="100%" />
      </Flex>
      {sideBarOptions.options.map(item => (
        <Box _hover={{ color: '#5A4CA7' }} p="5" pb="2">
          <NavLink to={item?.path}>{item.icon}</NavLink>
        </Box>
      ))}
    </Flex>
  );
}
