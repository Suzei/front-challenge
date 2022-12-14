import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { SideBar } from '../components/Sidebar';
import CurveBackground from '../assets/curve-background.svg';
export function DefaultLayout() {
  return (
    <Grid backgroundImage={`url(${CurveBackground})`} fontFamily="Ubuntu">
      <Header />
      <Grid templateColumns="min-content 1fr">
        <SideBar />
        <Outlet />
      </Grid>
    </Grid>
  );
}
