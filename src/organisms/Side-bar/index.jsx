import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/core';
import useDisclosure from '@chakra-ui/core/dist/useDisclosure';
import Box from '@chakra-ui/core/dist/Box';
import IconButton from '@chakra-ui/core/dist/IconButton';
import { BsGraphUp, BsFillHouseFill, BsGearFill, BsLayoutSidebarReverse} from "react-icons/bs";

import styles from './styles.module.scss'
import Grid from '@chakra-ui/core/dist/Grid';

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    history.push('/')
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        <Box w="5%" h="auto">
          <IconButton
            onClick={onOpen}
            variantColor="blue"
            aria-label="Open menu"
            icon={BsLayoutSidebarReverse}
            size="lg"
          />
        </Box>
      </Grid>
      <Drawer placement="right" bg="orange" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <NavLink to="/home" activeClassName={styles.activeLink}>
              <p className={styles.menuItem}>
                <Box as={BsFillHouseFill} size="22px" color="white" />
                <p>Home</p>
              </p>
            </NavLink>
            <NavLink to="/main" activeClassName={styles.activeLink}>
              <p className={styles.menuItem}>
                <Box as={ BsGraphUp } size="22px" color="white" />
                <p>Main</p>
              </p>
            </NavLink>
              <NavLink to="/settings" activeClassName={styles.activeLink}>
                <p className={styles.menuItem}>
                  <Box as={BsGearFill} size="22px" color="white" />
                  <p>Settings</p>
                </p>
              </NavLink>
          </DrawerBody>

          <DrawerFooter>
            <div className={styles.logout} onClick={logoutHandler}>
                <p>LogOut</p>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;