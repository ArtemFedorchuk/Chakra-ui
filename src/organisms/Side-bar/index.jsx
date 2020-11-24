import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/core';
import useDisclosure from '@chakra-ui/core/dist/useDisclosure';
import Box from '@chakra-ui/core/dist/Box';
import IconButton from '@chakra-ui/core/dist/IconButton';
import { BsGraphUp, BsFillHouseFill, BsGearFill, BsLayoutSidebarReverse} from "react-icons/bs";

import styles from './styles.module.scss'
import {StatusBlock} from '../../atoms';

const SideBar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    history.push('/')
  };

  return (
    <>
      <div className={styles.wrapperBox}>
        <Box w="5%" h="auto">
          <IconButton
            onClick={onOpen}
            variantColor="blue"
            aria-label="Open menu"
            icon={BsLayoutSidebarReverse}
            size="lg"
          />
        </Box>
        <Box w="95%">
          <StatusBlock/>
        </Box>
      </div>
      <Drawer placement="right" bg="orange" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerHeader borderBottomWidth="1px">CRYPTO TOOL</DrawerHeader>
          <DrawerBody>
            <NavLink to="/home" activeClassName={styles.activeLink}>
              <p className={styles.menuItem}>
                <Box as={BsFillHouseFill} size="22px" color="white" />
                <span>Home</span>
              </p>
            </NavLink>
            <NavLink to="/main" activeClassName={styles.activeLink}>
              <p className={styles.menuItem}>
                <Box as={ BsGraphUp } size="22px" color="white" />
                <span>Main</span>
              </p>
            </NavLink>
              <NavLink to="/settings" activeClassName={styles.activeLink}>
                <p className={styles.menuItem}>
                  <Box as={BsGearFill} size="22px" color="white" />
                  <span>Settings</span>
                </p>
              </NavLink>
          </DrawerBody>

          <DrawerFooter>
            <div className={styles.logout} onClick={logoutHandler}>
                <span>LogOut</span>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;