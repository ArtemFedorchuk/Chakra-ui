import React from 'react'
import { Grid, Box } from "@chakra-ui/core";

import SideBar from '../../organisms/Side-bar';
import { Graph, ButtonGroup, HomeInputGroup } from '../../molecules';

const HomeTemplate = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      <SideBar />
      <Box w="100%" h="100vh" bg="">
        <Graph />
        <ButtonGroup />
        <HomeInputGroup />
      </Box>
    </Grid>
  )
};

export default HomeTemplate;