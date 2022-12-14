import { Box, Divider, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import {
  BsHouse,
  BsLayers,
  BsTruck,
  BsCartDash,
  BsTools,
  BsCardChecklist,
  BsChat,
  BsPerson,
  BsGear,
} from 'react-icons/bs';

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
        path: 'createproduct',
      },

      {
        icon: <BsTools color="gray" size={18} />,
      },

      {
        icon: <BsTruck color="gray" size={18} />,
      },

      {
        icon: <BsCartDash color="gray" size={18} />,
      },

      {
        icon: <BsCardChecklist color="gray" size={18} />,
      },

      { icon: <BsChat color="gray" size={18} /> },

      { icon: <BsPerson color="gray" size={18} /> },

      { icon: <BsGear color="gray" size={18} /> },
    ],
  };

  return (
    <Flex
      h="580px"
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
